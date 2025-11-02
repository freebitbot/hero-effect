import DOMImplementation from '../../src/api/DOMImplementation';

const domImplementation = new DOMImplementation();

describe('DOMImplementation', () => {
  it('should createDocument', async () => {
    const document = domImplementation.createDocument(null, null, null);
    expect(document).toBeTruthy();
  });

  it('should createDocumentType', async () => {
    const documentType = domImplementation.createDocumentType('svg:svg', '', '');
    expect(documentType).toBeTruthy();
  });

  it('should createHTMLDocument', async () => {
    const document = domImplementation.createHTMLDocument('title');
    expect(document).toBeTruthy();
  });
});
