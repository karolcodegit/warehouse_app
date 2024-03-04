import { jsPDF } from "jspdf";

export const useGeneratePdf = () => {
  

  const createTextRow = (text, font, fontSize, align, bold = "false", x, y) => {
    return { text, font, fontSize, align, bold, x, y };
  };
  function createRectangle(doc, x, y, width, height, options = {}, rows = []) {
    // Domyślne opcje
    const defaults = {
      titleFont: "helvetica",
      titleFontSize: 14,
      titleAlign: "center",
      textFont: "helvetica",
      textFontSize: 12,
      textAlign: "left",
      bold: false,
      borderColor: [0, 0, 0], // RGB
      lineWidth: 0.3,
      fill: false,
    };

    // Połącz domyślne opcje z dostarczonymi przez użytkownika
    const opts = { ...defaults, ...options };

    // Ustaw czcionkę i rozmiar dla nagłówka
    doc.setFont(opts.titleFont);
    doc.setFontSize(opts.titleFontSize);

    // Wypisz wiersze
    rows.forEach((row) => {
      doc.setFont(row.font, row.bold ? "bold" : "normal");
      doc.setFontSize(row.fontSize);
      doc.text(row.text, x + row.x, y + row.y, {
        align: row.align,
        maxWidth: width - 10,
      });
    });

    // Ustaw kolor i szerokość linii
    doc.setDrawColor(...opts.borderColor);
    doc.setLineWidth(opts.lineWidth);

    // Narysuj obramowanie
    doc.rect(x, y, width, height, opts.fill ? "FD" : "S");
  }

  const generatePdf = async (transportData, carrier, companyInfo) => {
    console.log('transportData:', transportData);
console.log('transportData.shipment:', transportData?.shipment);
console.log(carrier);
    const doc = new jsPDF("p", "mm", "a4");

    //1
    createRectangle(doc, 10, 10, 95, 30, {}, [
      {
        text: "1. Nadawca (nazwisko lub nazwa, adres, kraj)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Sender (name, address, coutry)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `${companyInfo?.name}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 15,
      },
      {
        text: `${companyInfo?.secondName}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 20,
      },
      {
        text: `ul.${companyInfo.street} ${companyInfo.number}, ${companyInfo.zipCode} ${companyInfo.city}, ${companyInfo.country}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 25,
      },
    ]);
    //MIEDZYNARODOWY SAMOCHODOWY LIST PRZEWOZOWY CMR
    createRectangle(doc, 105, 10, 95, 30, {}, [
      // { text: '1. Nadawca (nazwisko lub nazwa, adres, kraj)', font: 'helvetica', fontSize: 6, align: 'left', bold: true, x: 10, y: 10 },
      // { text: 'Sender (name, address, coutry)', font: 'helvetica', fontSize: 6, align: 'left', bold: false, x: 12, y: 15 },
      // { text: 'Nazwa firmy', font: 'helvetica', fontSize: 10, align: 'center', bold: true, x: 95/2, y: 25 },
      // { text: 'Nazwa', font: 'helvetica', fontSize: 10, align: 'center', bold: true, x: 95/2, y: 30 },
      // { text: 'adres', font: 'helvetica', fontSize: 10, align: 'center', bold: true, x: 95/2, y: 35 },
    ]);
    //2
    createRectangle(doc, 10, 40, 95, 20, {}, [
      {
        text: "2. Obiorca (nazwisko lub nazwa, adres, kraj)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Consignee (name, address, country)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `${carrier.carrierName}, ${carrier.carrierStreet} ${carrier.carrierNumber}, ${carrier.carrierZipCode} ${carrier.carrierCity}, ${carrier.carrierCountry}`,
        font: "helvetica",
        fontSize: 7,
        align: "center",
        bold: true,
        x: 30,
        y: 15,
      },
    ]);
    //3
    createRectangle(doc, 10, 60, 95, 17, {}, [
      {
        text: "3. Miejsce przeznaczenia (miejscowosc, kraj)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Place of delivery of the goods (place, country)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `${carrier.carrierName}, ${carrier.carrierStreet} ${carrier.carrierNumber}, ${carrier.carrierZipCode} ${carrier.carrierCity}, ${carrier.carrierCountry}`,text: ``,
        font: "helvetica",
        fontSize: 7,
        align: "center",
        bold: true,
        x: 30,
        y: 15,
      },
    ]);
    //4
    createRectangle(doc, 10, 77, 95, 17, {}, [
      {
        text: "4. Miejsce i data zaladowania (miejscowosc, kraj, data)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Place and date of taking over the goods (place, country)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `Zerniki dn.:`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 15,
        y: 15,
      },
      {
        text: `${transportData?.date}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 70,
        y: 15,
      },
    ]);
    //5
    createRectangle(doc, 10, 94, 95, 18, {}, [
      {
        text: "5. Zalaczam dokumenty",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Documents attached",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `Manifest / Carrier list ${transportData?.shipment}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 15,
      },
    ]);
    //16
    createRectangle(doc, 105, 40, 95, 20, {}, [
      {
        text: "16. Przewoznik (nazwisko lub nazwa, adres, kraj)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Documents attached",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: `${transportData?.license_trailer}/${transportData?.license_truck}`,
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 15,
      },
    ]);
    //17
    createRectangle(doc, 105, 60, 95, 17, {}, [
      {
        text: "17. Kolejni przewoznicy (nazwisko lub nazwa, adres, kraj)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Successive carriers (name, address, country)",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
      {
        text: "",
        font: "helvetica",
        fontSize: 10,
        align: "center",
        bold: true,
        x: 95 / 2,
        y: 15,
      },
    ]);
    //18
    createRectangle(doc, 105, 77, 95, 35, {}, [
      {
        text: "18. Zastrzezenia i uwagi przewoznika",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 2,
        y: 4,
      },
      {
        text: "Carrier's reservations and observations",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
    ]);

    //6-9
    createRectangle(doc, 10, 112, 110, 75, {}, [
      {
        text: "6. Cechy i numery",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
    ]);
    //small line
    createRectangle(doc, 10, 175, 110, 12, {}, [
      {
        text: "29. Cechy i numery",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 5,
        align: "left",
        bold: false,
        x: 4,
        y: 7,
      },
    ]);
    //10
    createRectangle(doc, 120, 112, 25, 75, {}, [
      {
        text: "6. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);
    //11
    createRectangle(doc, 145, 112, 25, 75, {}, [
      {
        text: "6. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);

    //12
    createRectangle(doc, 170, 112, 25, 75, {}, [
      {
        text: "6. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);

    //13
    createRectangle(doc, 10, 187, 95, 35, {}, [
      {
        text: "13. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);

    //14
    createRectangle(doc, 10, 222, 95, 27, {}, [
      {
        text: "14. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);
    //21
    createRectangle(doc, 10, 249, 95, 17, {}, [
      {
        text: "21. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);

    //22
    createRectangle(doc, 10, 266, 63.3, 25, {}, [
      {
        text: "22. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);
    //23
    createRectangle(doc, 73.3, 266, 63.3, 25, {}, [
      {
        text: "23. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);
    //24
    createRectangle(doc, 136.6, 266, 63.3, 25, {}, [
      {
        text: "24. Cechy i numery",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: true,
        x: 2,
        y: 4,
      },
      {
        text: "Marks and Nos",
        font: "helvetica",
        fontSize: 6,
        align: "left",
        bold: false,
        x: 4,
        y: 9,
      },
    ]);

    return doc;
  };

  return { createTextRow, createRectangle, generatePdf };
};
