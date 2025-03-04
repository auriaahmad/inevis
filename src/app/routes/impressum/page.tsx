import React from "react";

const Impressum: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 text-justify text-gray-800">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      {/* Company & Address */}
      <p className="mb-4">
        <strong>inevis GmbH</strong>
        <br />
        Hohenstaufenring 62
        <br />
        50674 Köln
      </p>

      {/* Contact Info */}
      <p className="mb-4">
        <strong>eMail:</strong>{" "}
        <a href="mailto:info@inevis.de" className="underline">
          info@inevis.de
        </a>
        <br />
        <strong>Web:</strong>{" "}
        <a
          href="https://www.inevis.de"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.inevis.de
        </a>
      </p>

      {/* Bank Info */}
      <h2 className="text-xl font-semibold mt-6">Bankverbindung:</h2>
      <p className="mb-4">
        Kreditinstitut: Commerzbank
        <br />
        Kontoinhaber: inevis GmbH
        <br />
        IBAN: DE41 5004 0000 0719 1901 00
        <br />
        Swift-BIC: COBADEFFXXX
      </p>

      {/* Management */}
      <p className="mb-4">
        <strong>Vertretungsberechtigter Geschäftsführer:</strong>
        <br />
        Herr Ali Kazmi
      </p>

      {/* Tax ID */}
      <p className="mb-4">
        <strong>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </strong>{" "}
        DE 271999769
      </p>

      {/* Register Info */}
      <p className="mb-4">
        <strong>Registergericht:</strong> Amtsgericht Frankfurt am Main
        <br />
        <strong>Registernummer:</strong> HRB 88160
      </p>

      {/* Content Responsible */}
      <p className="mb-4">
        <strong>Inhaltlich Verantwortlicher gemäß § 6 MDStV</strong>
        <br />
        Herr Ali Kazmi (Anschrift wie oben)
      </p>

      {/* Image Sources */}
      <p className="mb-4">
        <strong>
          Quellenangaben für die verwendeten Bilder und Grafiken:
        </strong>
        <br />
        © bloomua - Fotolia.com
      </p>

      {/* Legal Notice */}
      <h2 className="text-xl font-semibold mt-6">Rechtliche Hinweise:</h2>
      <p className="mb-4">
        Wir übernehmen keine Haftung für die Inhalte, die sich auf diesen
        Webseiten oder über gesetzte Links auf anderen Seiten befinden. Für die
        Aktualität oder Richtigkeit dieser Seiten sowie für die Aktualität oder
        Vollständigkeit der Daten der Reparaturauskunft und der Reparaturannahme
        wird keine Gewähr geleistet. Wir geben keine Gewähr über die
        Erreichbarkeit der Webseiten. Sowohl Inhalte, Erscheinungsform als auch
        die Struktur der Webseiten können jederzeit ohne vorherige Ankündigung
        geändert werden. Ein Anspruch auf die Verfügbarkeit einzelner oder aller
        Seiten besteht nicht. Urheberrechte Das Verändern, Bearbeiten,
        Modifizieren oder die Weitergabe an Dritte dieser Seiten im Ganzen oder
        in Teilen, in gestalterischer oder inhaltlichen Weise ist nicht
        gestattet. Ausgeführte Warenzeichen und Markennamen sind Eigentum ihrer
        jeweiligen Inhaber.
      </p>
    </div>
  );
};

export default Impressum;
