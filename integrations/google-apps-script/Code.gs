const SHEET_NAME = 'Website Leads';
const REQUEST_ID_PATTERN = /^[a-zA-Z0-9_-]{1,80}$/;

function doPost(e) {
  const fields = e && e.parameter ? e.parameter : {};
  const requestId = REQUEST_ID_PATTERN.test(fields.requestId || '') ? fields.requestId : '';
  const name = String(fields.name || '').trim();
  const organization = String(fields.organization || '').trim();
  const email = String(fields.email || '').trim();

  if (fields.website || !name || name.length > 120 ||
      !organization || organization.length > 200 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return createResultPage(requestId, false);
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Bind this script to the spreadsheet that should receive website leads.');

  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Name', 'Organization', 'Email']);
  }

  sheet.appendRow([
    new Date(),
    safeCellValue(name),
    safeCellValue(organization),
    safeCellValue(email)
  ]);

  return createResultPage(requestId, true);
}

function createResultPage(requestId, ok) {
  const message = JSON.stringify({
    type: 'website-lead-result',
    requestId: requestId,
    ok: ok
  });
  const html = '<!doctype html><script>window.top.postMessage(' +
    message + ', "*");</script>';

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function safeCellValue(value) {
  return /^[\s=+\-@]/.test(value) ? "'" + value : value;
}
