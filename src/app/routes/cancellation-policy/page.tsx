import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#D7E5F8] to-white pt-10">

    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 text-justify text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cancellation Policy</h1>

      {/* § 9 Right of return regarding the delivery of goods */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          § 9 Right of Return Regarding the Delivery of Goods 9.1
        </h2>

        <h3 className="text-xl font-semibold mb-2">Return Policy</h3>

        {/* Horizontal line with text in the middle */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-700">Return Policy  Starts</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <p className="mb-4">
          <strong>Right of Return</strong>
        </p>
        <p className="mb-4">
          You can return the goods received within 14 days without giving any
          reason by returning the goods. The period begins after receipt of this
          instruction in text form (e.g. as a letter, fax, e-mail), but not
          before receipt of the goods by the recipient (in the case of recurring
          deliveries of similar goods, not before receipt of the first partial
          delivery) and also not before fulfillment of our information
          obligations in accordance with Article 246 § 2 in conjunction with
          § 1 Paragraph 1 and 2 EGBGB and our obligations in accordance with
          § 312g Paragraph 1 Sentence 1 BGB in conjunction with Article 246 § 3
          EGBGB. Only in the case of goods that cannot be sent by parcel (e.g.
          bulky goods) can you declare the return by requesting return in text
          form. To meet the deadline, it is sufficient to send the goods or the
          return request in good time. In any case, the return is at our expense
          and risk. The return or return request must be sent to:
        </p>

        <p className="mb-4">
          <strong>inevis GmbH</strong>
          <br />
          Represented by the Managing Director
          <br />
          Mr. Syed Ali Kazmi
          <br />
          Taunusstr. 47
          <br />
          60329 Frankfurt
        </p>

        <h3 className="text-xl font-semibold mb-2">Return Consequences</h3>
        <p className="mb-4">
          In the event of an effective return, both parties must return any
          services received and surrender any benefits derived. In the event of
          deterioration of the item and for uses (e.g. benefits of use) that
          cannot be returned or can only be returned in part or in a
          deteriorated condition, you must pay us compensation for the value.
          You only have to pay compensation for deterioration of the item and
          uses derived if the use or deterioration is due to handling of the
          item that goes beyond checking the properties and how it works.
          “Checking the properties and how it works” means testing and trying
          out the respective goods, as is possible and usual in a store, for
          example. Obligations to refund payments must be fulfilled within 30
          days. For you, the period begins when the goods are dispatched or the
          return request is made, and for us when they are received.
        </p>

        <h3 className="text-xl font-semibold mb-2">Financed Transactions</h3>
        <p className="mb-4">
          If you finance this contract with a loan and later exercise your right
          of return, you are no longer bound to the loan agreement, provided
          that both contracts form an economic unit. This is particularly the
          case if we are also your lender or if your lender uses our cooperation
          to finance the contract. If the loan has already been paid to us when
          the cancellation takes effect or when the goods are returned, your
          lender assumes our rights and obligations from the financed contract
          in relation to you with regard to the legal consequences of the
          cancellation or return. If you want to avoid a contractual obligation
          as far as possible, exercise your right of return and revoke the loan
          agreement if you are also entitled to a right of cancellation for
          this.
        </p>

        {/* Horizontal line replacing the END OF RETURN POLICY text */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-700">End of Return Policy</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <p className="mb-4">
          9.2 There is no right of return for audio or video recordings (e.g.
          CDs, video cassettes, DVDs) or software if these products have been
          unsealed by the purchaser (Section 312 d IV No. 2 BGB).
        </p>
      </section>

      {/* § 9a Right of withdrawal with regard to services */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          § 9a Right of Withdrawal With Regard to Services
        </h2>

        {/* Horizontal line for the beginning of the cancellation policy regarding services */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-700">Cancellation Policy (Services)</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <h3 className="text-xl font-semibold mb-2">Right of Withdrawal</h3>
        <p className="mb-4">
          You can revoke your contractual declaration within 14 days without
          giving reasons in text form (e.g. as a letter, fax, email). The period
          begins after receipt of this instruction in text form, but not before
          the conclusion of the contract and also not before fulfillment of our
          information obligations in accordance with Article 246 § 2 in
          conjunction with § 1 paragraphs 1 and 2 EGBGB and our obligations in
          accordance with § 312g paragraph 1 sentence 1 BGB in conjunction with
          Article 246 § 3 EGBGB. To meet the deadline, it is sufficient to send
          the revocation in good time.
        </p>

        <p className="mb-4">
          The revocation must be addressed to:
          <br />
          <strong>inevis GmbH</strong>
          <br />
          Represented by the Managing Director
          <br />
          Mr. Syed Ali Kazmi
          <br />
          Hohenstaufenring 62
          <br />
          50674 Cologne
          <br />
          <a href="mailto:info@inevis.de" className="underline">
            info@inevis.de
          </a>
        </p>

        <h3 className="text-xl font-semibold mb-2">Consequences of Revocation</h3>
        <p className="mb-4">
          In the event of an effective cancellation, the services received by
          both parties must be returned and any benefits derived (e.g. interest)
          must be surrendered. If you are unable to return or surrender the
          service received and benefits (e.g. benefits of use) to us, or only
          partially, or only in a deteriorated condition, you must pay us
          compensation for the value. This may mean that you must still fulfill
          the contractual payment obligations for the period up to the
          cancellation. [You only have to pay compensation for the deterioration
          of the item if the deterioration is due to handling of the item that
          goes beyond checking its properties and functionality. “Checking the
          properties and functionality” means testing and trying out the
          respective goods, as is possible and usual in a store, for example.
          Items that can be sent by parcel must be returned at our expense and
          risk. Items that cannot be sent by parcel will be picked up from you.]
          Obligations to refund payments must be fulfilled within 30 days. For
          you, the period begins when you send your cancellation notice and for
          us when we receive it.
        </p>

        <h3 className="text-xl font-semibold mb-2">Special Notes</h3>
        <p className="mb-4">
          Your right of withdrawal expires prematurely if the contract is fully
          fulfilled by both parties at your express request before you have
          exercised your right of withdrawal.
        </p>

        <h3 className="text-xl font-semibold mb-2">Financed Transactions</h3>
        <p className="mb-4">
          If you have financed this contract through a loan and you revoke the
          financed contract, you are no longer bound to the loan agreement if
          both contracts form an economic unit. This is particularly the case if
          we are also your lender or if your lender uses our assistance with
          financing.
          <br />
          If we have already received the loan when the revocation or return
          takes effect, your lender will assume our rights and obligations from
          the financed contract in relation to you with regard to the legal
          consequences of the revocation or return.
          <br />
          The latter does not apply if the subject of the present contract is
          the acquisition of financial instruments (e.g. securities, foreign
          currencies or derivatives).
          <br />
          If you want to avoid a contractual obligation as far as possible,
          revoke both contractual declarations separately.
        </p>

        {/* Horizontal line replacing the END of the cancellation policy regarding services */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-700">
            End of Cancellation Policy (Services)
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default CancellationPolicy;