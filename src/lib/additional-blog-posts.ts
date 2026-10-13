import type { BlogPost } from "./blog-posts";

const dgft = "https://www.dgft.gov.in/CP/";
const iec = "https://www.dgft.gov.in/CP/iec-profile-management";
const rcmc = "https://www.dgft.gov.in/CP/?opt=rcmc";
const policy = "https://www.dgft.gov.in/CP/?opt=itchs-import-export";
const schemes = "https://www.dgft.gov.in/CP/?opt=schemes";
const apeda = "https://apeda.gov.in/";
const apedaRegistration = "https://apeda.gov.in/Registration-Procedure";
const apedaReports = "https://apeda.gov.in/market-intelligence-reports";
const agriExchange = "https://agriexchange.apeda.gov.in/";
const icegate = "https://www.icegate.gov.in/";
const customsPortal = "https://foservices.icegate.gov.in/cip/cip#/";
const gst = "https://www.gst.gov.in/";
const lut = "https://tutorial.gst.gov.in/userguide/refund/Furnishing_of_Letter_of_Undertaking_for_Export_of_Goods_or_Services.htm";
const rbi = "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395";
const mca = "https://www.mca.gov.in/content/mca/global/en/home.html";
const msmE = "https://udyamregistration.gov.in/";
const fssai = "https://www.fssai.gov.in/business/about-foscos";
const spicesBoard = "https://www.indianspices.com/exporters-registration.html";
const pqis = "https://pqis.dac.gov.in/";
const tradeConnect = "https://www.trade.gov.in/";
const fieo = "https://www.fieo.org/";
const ecgc = "https://main.ecgc.in/";
const iccIncoterms = "https://iccwbo.org/business-solutions/incoterms-rules/";
const icc = "https://iccwbo.org/";
const unComtrade = "https://comtradeplus.un.org/";
const tradeMap = "https://www.trademap.org/";
const itpo = "https://www.indiatradefair.com/";

const source = (label: string, href: string) => ({ label, href });

function createGuide(
  slug: string,
  title: string,
  category: string,
  excerpt: string,
  image: string,
  imageAlt: string,
  answer: string,
  nextSteps: string,
  sources: BlogPost["sources"],
  featured = false
): BlogPost {
  return {
    slug,
    title,
    category,
    excerpt,
    image,
    imageAlt,
    featured,
    sections: [
      { heading: "The short answer", paragraphs: [answer] },
      { heading: "A practical way to proceed", paragraphs: [nextSteps] },
    ],
    sources,
  };
}

export const additionalBlogPosts: BlogPost[] = [
  createGuide(
    "start-import-export-business-from-zero",
    "How can I start an import–export business in India from zero?",
    "Getting Started",
    "A step-by-step starting framework: choose a product, validate a market, establish the business, obtain applicable registrations, and test a real trade enquiry.",
    "/products/Machinery.jpg",
    "Machinery representing products traded internationally",
    "Start with one clearly specified product and one target market, not a broad catalogue. Check whether the product is freely exportable/importable or restricted, identify likely buyers and suppliers, estimate the full delivered cost, and confirm the destination's standards. Choose a suitable Indian business form, arrange PAN and a business bank account, obtain an IEC for goods trade, and check GST and product-specific requirements. There is no single registration that makes every product legal in every market.",
    "Collect quotations from suppliers and freight forwarders, obtain samples or specifications, validate a buyer, and put grade, quantity, packaging, inspection, delivery term, payment, and dispute handling in writing. Begin with an order size your working capital and compliance process can support. Verify the live DGFT policy and destination rules before accepting an order.",
    [source("DGFT: IEC profile and application", iec), source("DGFT: ITC(HS) import/export policy", policy), source("Trade Connect ePlatform", tradeConnect)],
    true
  ),
  createGuide(
    "investment-to-start-export-business",
    "How much investment is required to start an import–export business?",
    "Getting Started",
    "There is no universal startup amount: capital depends on the product, order size, payment terms, logistics, compliance, and whether you hold stock.",
    "/products/Imports_Exports.jpeg",
    "International trade and sourcing",
    "India does not prescribe one general minimum investment for every import–export trading business. A merchant trader may begin without owning a factory, but still needs to budget for business setup, samples, product testing, packaging, documentation support, freight, insurance, bank charges, taxes or duties where applicable, and working capital until payment arrives. Inventory-heavy, perishable, regulated, or long-transit goods can require substantially more cash than a back-to-back order.",
    "Build a shipment-level cash-flow model: supplier advance and balance, inspection and packing, inland transport, customs/port charges, freight, insurance, finance cost, currency movement, and the payment delay after shipment. Obtain written quotes and model a delay or rejected shipment. Treat MSME schemes and credit as conditional support, not guaranteed startup funding; discuss lending eligibility with a regulated bank.",
    [source("DGFT: IEC requirements", iec), source("Udyam Registration, Ministry of MSME", msmE), source("ICEGATE customs services", icegate)]
  ),
  createGuide(
    "profitable-products-to-export-from-india",
    "Which products are most profitable to export from India?",
    "Markets and Products",
    "Profitability is shipment- and buyer-specific. Use current trade data and full landed-cost calculations rather than a fixed online list of “best products.”",
    "/products/Basmathi_Rice.png",
    "Indian rice as an example of a product to research for export markets",
    "There is no reliable universal ranking of the most profitable export products. Margin depends on purchase price, grade consistency, market demand, competition, seasonality, destination duties, compliance costs, shelf life, rejection risk, freight, finance, and payment terms. Agricultural goods, processed foods, textiles, engineering goods, and other sectors may show trade opportunities, but high export value alone does not prove a small exporter can make a profit.",
    "Shortlist products you can source consistently. For each HS code and destination, compare India's recent export values and quantities, destination imports, unit values, tariffs, non-tariff measures, and competitor origins. Then request real supplier, testing, packing, and freight quotations and calculate contribution after all costs. APEDA publishes product-specific market reports for many agricultural goods; validate rules and prices again before quoting.",
    [source("APEDA market intelligence reports", apedaReports), source("APEDA AgriExchange", agriExchange), source("UN Comtrade trade statistics", unComtrade), source("ITC Trade Map", tradeMap)],
    true
  ),
  createGuide(
    "countries-demand-indian-products",
    "Which countries have the highest demand for Indian products?",
    "Markets and Products",
    "Demand changes by product and year. Compare import data for the exact HS code instead of relying on a single country ranking.",
    "/products/Fruits.jpeg",
    "Fresh produce prepared for potential international markets",
    "There is no one destination ranking that applies to every Indian product. A market importing large quantities of rice may have different demand, tariffs, standards, and competition for chillies, coffee, machinery, or packaging. Export statistics describe past trade, not a guarantee that a new supplier can access the market or win orders.",
    "Select the product's likely HS code and compare recent destination imports, Indian exports, growth over several years, unit values, tariff treatment, and applicable product rules. Use APEDA reports and AgriExchange for relevant agricultural categories, and UN Comtrade or ITC Trade Map for broader comparisons. Confirm current import requirements with the destination's official authorities and importer.",
    [source("APEDA market intelligence", apedaReports), source("APEDA AgriExchange", agriExchange), source("UN Comtrade", unComtrade), source("ITC Trade Map", tradeMap)]
  ),
  createGuide(
    "find-genuine-international-buyers",
    "How can I find genuine international buyers for my products?",
    "Finding Buyers",
    "Use official trade-promotion channels, product-specific buyer leads, industry events, and disciplined verification before sharing credit or shipping goods.",
    "/products/Imports_Exports.jpeg",
    "International trade connections and buyer sourcing",
    "Begin with a defined product offer: specification, grade, packaging, minimum practical order, capacity, lead time, and target countries. Find prospects through Trade Connect, APEDA AgriExchange buyer leads and exporter resources for relevant agricultural products, export promotion councils, chambers, and trade fairs. These channels can introduce leads but do not guarantee a buyer is genuine or financially sound.",
    "Screen each prospect independently: confirm its legal registration using the relevant country's company registry, check its business address and domain, speak with named staff over a company channel, request trade references, and ask your bank or ECGC about available risk checks. Agree on a small, controlled first transaction and secure payment terms. Be cautious of unexplained fees, pressure to overpay, mismatched company identities, and requests to divert payment.",
    [source("Trade Connect ePlatform", tradeConnect), source("APEDA AgriExchange buyer leads", agriExchange), source("FIEO", fieo), source("ECGC", ecgc)],
    true
  ),
  createGuide(
    "register-import-export-company-india",
    "How do I register an import–export company in India?",
    "Getting Started",
    "Set up a legal business form first, then complete tax, banking, IEC, and product-specific steps relevant to your activity.",
    "/products/Machinery.jpg",
    "Trade operations and business setup",
    "“Import–export company” is not one separate legal form. You may operate as a proprietorship, partnership, LLP, or company, subject to the relevant laws and your needs. Company and LLP incorporation are handled through MCA processes; proprietorship setup is different. After establishing the business identity and bank account, apply for an IEC through DGFT for goods import/export, then check GST, customs/ICEGATE onboarding, and product-specific registrations.",
    "Decide ownership, liability, tax and compliance responsibilities with a qualified accountant or company secretary. Keep the legal name, PAN, address and bank details consistent. The right registrations depend on whether you trade goods or services, the product, turnover, state, destination, and any incentive claimed; verify each requirement on the relevant official portal rather than paying an unofficial registration agent by default.",
    [source("Ministry of Corporate Affairs", mca), source("DGFT IEC", iec), source("GST Portal", gst)]
  ),
  createGuide(
    "iec-meaning-and-how-to-obtain",
    "What is an Importer Exporter Code (IEC), and how do I obtain it?",
    "Getting Started",
    "DGFT issues the IEC used for goods imports and exports, subject to stated exemptions; check the current application requirements directly.",
    "/products/Imports_Exports.jpeg",
    "Import and export trade documentation",
    "The Importer Exporter Code is a key business identifier issued by the Directorate General of Foreign Trade. DGFT states that an IEC is generally required to import or export goods unless specifically exempted; service exporters have separate conditions, including cases where they seek Foreign Trade Policy benefits. IEC is separately issued by DGFT even though its number is linked to the firm's PAN.",
    "DGFT currently lists a firm PAN, bank account in the firm's name, and valid address among the application prerequisites. Apply through the DGFT portal, keep the details accurate, and check the live help material for fees, verification, profile updates, and annual confirmation requirements. Do not rely on old screenshots or third-party checklists for the current filing flow.",
    [source("DGFT: IEC profile management", iec), source("DGFT", dgft)]
  ),
  createGuide(
    "rcmc-is-it-compulsory",
    "What is RCMC, and is it compulsory for exporters?",
    "Compliance",
    "RCMC is a Registration-Cum-Membership Certificate. Whether you need one depends on the product, policy purpose, and current DGFT requirements.",
    "/certificates/RCMC/RCMC_page-0001.jpg",
    "Registration-Cum-Membership Certificate",
    "An RCMC is a Registration-Cum-Membership Certificate issued by the relevant Export Promotion Council or commodity board. It is not safe to say it is universally compulsory for every exporter or that one certificate authorizes every product. The relevant council and requirement depend on product classification, the current Foreign Trade Policy, and the particular registration, benefit, or procedure involved.",
    "Identify the correct product and HS classification, then check DGFT's current RCMC service and the relevant council or board's rules. Confirm eligibility, required documents, membership category, validity, and renewal before applying. If you export multiple product groups, ask DGFT or the competent councils which body applies to each rather than assuming one council covers all goods.",
    [source("DGFT e-RCMC", rcmc), source("DGFT IEC profile", iec)]
  ),
  createGuide(
    "licenses-registrations-by-export-product",
    "Which licences and registrations are required to export different products?",
    "Compliance",
    "Requirements depend on the precise product, processing, HS code, origin, destination, and current restricted-item policies.",
    "/products/Chillies.jpg",
    "Spices that may have product-specific export requirements",
    "There is no universal licence list for all exports. Start with the ITC(HS) export policy for the exact product code and review destination-country rules. Depending on the goods, exporters may need registration or certification from bodies such as APEDA or the Spices Board, food-business licensing under FSSAI rules, plant-health or phytosanitary documents, quality or standards certification, or other regulator approvals. A certificate for one item does not automatically cover another.",
    "Write down the product's botanical or technical identity, processing, intended use, packaging, and destination. Ask the relevant regulator, export promotion body, buyer, and customs broker to confirm requirements for that shipment. For plants and plant products, check plant-quarantine/import permits; for foods, check food-safety and labelling rules; then verify the live DGFT policy and destination rules before committing.",
    [source("DGFT ITC(HS) policy", policy), source("APEDA registration procedure", apedaRegistration), source("Spices Board exporter registration", spicesBoard), source("FSSAI licensing", fssai), source("Plant Quarantine Information System", pqis)]
  ),
  createGuide(
    "export-without-owning-factory",
    "Can I start an export business without owning a factory?",
    "Getting Started",
    "Yes. A merchant exporter can source from a manufacturer, but product responsibility, traceability, contracts, and compliance still matter.",
    "/products/Cashew_Nuts.jpeg",
    "A sourced product prepared for export",
    "Owning a factory is not a general prerequisite to export goods. A merchant exporter can buy from a producer or supporting manufacturer and sell overseas, provided the transaction complies with the product's rules and the exporter can meet its contractual obligations. The exporter remains responsible for accurate product declarations, agreed quality, shipment documents, buyer communication, and applicable registrations; an IEC does not replace a product licence.",
    "Vet the supplier, verify its capacity and relevant licences, inspect samples, agree on specifications and rejection remedies, and document who handles packing, testing, traceability, and shipment deadlines. Confirm whether the product rules require a registered establishment, approved packhouse, manufacturer linkage, or other facility-specific compliance. Do not promise quantity or certifications that the supplier cannot prove.",
    [source("DGFT IEC and business categories", iec), source("APEDA exporter resources", apeda), source("DGFT ITC(HS) policy", policy)]
  ),
  createGuide(
    "verified-importers-wholesalers-distributors-worldwide",
    "How can I find verified importers, wholesalers, and distributors worldwide?",
    "Finding Buyers",
    "Combine official trade-promotion directories and industry networks with independent company and payment-risk checks.",
    "/products/Imports_Exports.jpeg",
    "International sourcing and trade contacts",
    "Start with product-country data and use relevant government trade-promotion tools, export promotion councils, chambers, buyer-seller meets, and trade fairs to find prospects. APEDA AgriExchange has buyer leads and exporter resources for agricultural products; Trade Connect provides Indian trade services. A directory listing, trade portal account, or business card is a lead, not proof of solvency, authority to buy, or authenticity.",
    "Verify the business in the destination jurisdiction's official company registry, validate its address and decision-makers, obtain independent references, and compare the order with its normal business. Ask your bank and ECGC about due diligence or credit-risk options. Use written contracts and payment protections suited to the risk, and make the first order small enough to manage if a dispute occurs.",
    [source("Trade Connect", tradeConnect), source("APEDA AgriExchange", agriExchange), source("FIEO", fieo), source("ECGC", ecgc)]
  ),
  createGuide(
    "verify-international-buyer-scam-risk",
    "How do I verify whether an international buyer is genuine or a scammer?",
    "Finding Buyers",
    "No single online check is conclusive. Independently verify identity, authority, payment route, and transaction details before shipping.",
    "/products/Machinery.jpg",
    "Trade verification before an international shipment",
    "Treat buyer verification as layered due diligence. Check the legal entity in the official registry where it is incorporated, match names and addresses across the website, contract, purchase order, and bank instructions, and speak with the named buyer using independently confirmed contact details. Request references and review the order for unusual urgency, unexplained third-party payments, overpayments, fake proof of transfer, or fees demanded to release an order.",
    "Ask your authorised dealer bank about the proposed payment and documentation, and ask ECGC about available buyer or country risk products. For a first or higher-risk order, consider advance payment, a documentary credit from a bank acceptable to your bank, inspection, and a small trial shipment. A letter of credit reduces some risks only when its issuing bank and terms are acceptable and your documents strictly comply; it is not a substitute for checking the buyer.",
    [source("RBI: Master Direction on Export of Goods and Services", rbi), source("ECGC", ecgc), source("ICC", icc)]
  ),
  createGuide(
    "documents-required-to-export-from-india",
    "What documents are required to export goods from India?",
    "Documentation",
    "A shipment file commonly includes commercial and transport records, but the exact documents depend on product, route, payment, and destination.",
    "/products/Bananas.jpeg",
    "Agricultural produce prepared for export documentation",
    "A typical goods export file includes a confirmed order or sales contract, commercial invoice, packing list, shipping instructions, customs shipping bill, and transport document such as a bill of lading or airway bill. A certificate of origin, insurance record, inspection certificate, phytosanitary or health certificate, licence, or buyer-specific document may also be required. There is no universal checklist that applies to every product and market.",
    "Before cargo is packed, compare product names, HS code, quantity, net and gross weights, packages, value, origin, delivery term, and consignee across all documents. Confirm customs filing with ICEGATE or a licensed customs broker, and verify product certificates and destination import rules with the competent authorities and importer. Retain the final filed versions and amendments.",
    [source("ICEGATE", icegate), source("DGFT ITC(HS) policy", policy), source("APEDA export resources", apeda), source("CBIC", "https://www.cbic.gov.in/")],
    true
  ),
  createGuide(
    "calculate-export-costs-and-profit",
    "How do I calculate export costs and profit margins?",
    "Pricing and Logistics",
    "Build a shipment-level cost sheet from supplier price through delivery, finance, currency, compliance, and after-sales risk.",
    "/products/Basmathi_Rice.png",
    "Rice product used to illustrate export cost planning",
    "Start with the product's purchase cost and add processing or grading, packaging, local collection, inland transport, testing, certificates, customs or port charges, freight, insurance, bank and payment charges, financing, commissions, and expected losses or wastage. Account for currency conversion and the chosen Incoterm. The buyer's import duty and local taxes depend on the destination tariff and contract allocation; do not treat them as one fixed global fee.",
    "Obtain current written quotations from suppliers, testing providers, customs brokers, carriers, and banks. Calculate the margin on the revenue basis you actually receive, run best/base/worst cases for FX and delays, and leave a contingency for claims or inspection failures. Recheck the HS code, destination duties, export policy, and GST treatment before issuing a firm quote.",
    [source("ICEGATE Compliance Information Portal", customsPortal), source("DGFT ITC(HS) policy", policy), source("GST Portal", gst), source("ICC Incoterms® rules", iccIncoterms)]
  ),
  createGuide(
    "incoterms-fob-cif-exw-explained",
    "What are FOB, CIF, EXW, and other Incoterms?",
    "Pricing and Logistics",
    "Incoterms® allocate defined delivery tasks, costs, and risks between buyer and seller; they do not replace the sales contract or payment terms.",
    "/products/Imports_Exports.jpeg",
    "Cargo shipment and delivery terms in international trade",
    "Incoterms® are ICC rules used in contracts for the sale of goods. The chosen rule helps define delivery points, transfer of risk, and which party arranges or pays for specified transport, insurance, export, or import formalities. FOB, CIF, and EXW are not interchangeable price labels: each applies differently, and some rules are limited to particular transport modes. The rules do not determine ownership, payment timing, product quality, or remedies for breach.",
    "Name the exact rule, named port or place, and edition in the contract, for example, “FCA [named place], Incoterms® 2020.” Match it to the real transport plan and who can perform the customs and loading obligations. Have your freight forwarder and trade adviser check the allocation; consult ICC's current material because a poorly chosen rule can leave cost or risk gaps.",
    [source("ICC Incoterms® rules", iccIncoterms), source("RBI export guidance", rbi)]
  ),
  createGuide(
    "find-reliable-suppliers-manufacturers-india",
    "How do I find reliable suppliers and manufacturers in India?",
    "Sourcing",
    "Build a shortlist from relevant industry and official directories, then verify capability through documents, samples, references, and an audit.",
    "/products/Cashew_Nuts.jpeg",
    "Indian goods sourced for international buyers",
    "Find suppliers through industry associations, export promotion councils, commodity bodies, trade fairs, referrals, and directories such as APEDA's exporter resources where relevant. A portal or registration proves only what that record says; it does not guarantee product quality, capacity, solvency, or performance. Match the supplier's legal identity and business bank account before negotiating.",
    "Request a written specification, current licences relevant to the product, production or sourcing capacity, references, sample, packing details, and realistic lead time. Verify critical documents with the issuing body, commission an inspection or laboratory test when justified, and agree acceptance criteria and remedies in writing. Use staged orders and payment milestones until delivery performance is established.",
    [source("APEDA exporter resources", apeda), source("FIEO", fieo), source("Ministry of Corporate Affairs", mca)]
  ),
  createGuide(
    "international-market-prices-and-demand-data",
    "How can I obtain international market prices and product demand data?",
    "Markets and Products",
    "Use official trade statistics and commodity market intelligence, then verify actual prices with current buyer, supplier, and logistics quotations.",
    "/products/Coffee_Seeds.jpeg",
    "Coffee as an example of a commodity requiring market research",
    "For demand, compare import and export values and quantities by HS code, origin, destination, and year. APEDA's market reports and AgriExchange cover many agricultural products, including trade statistics, destination information, international prices, tariffs, and rules. UN Comtrade and ITC Trade Map provide broader trade datasets. Historical unit values are not firm selling prices and may combine different grades, contract terms, and shipment types.",
    "Define the product grade, packaging, shipment size, delivery term, and destination before comparing prices. Record the data source and period, then request live supplier, freight, insurance, and buyer quotations. Check currency, tariffs, seasonality, SPS notices, and market access. Refresh data before pricing because trade and policy conditions change.",
    [source("APEDA market intelligence", apedaReports), source("APEDA AgriExchange", agriExchange), source("UN Comtrade", unComtrade), source("ITC Trade Map", tradeMap)]
  ),
  createGuide(
    "ship-products-from-india-abroad",
    "How do I ship products from India to another country?",
    "Pricing and Logistics",
    "Choose a shipment route and carrier around the product, volume, delivery term, customs requirements, and destination import conditions.",
    "/products/Imports_Exports.jpeg",
    "Goods prepared for international shipment",
    "A typical shipment process is: confirm the buyer's order and destination requirements, classify and check the product policy, prepare export packing and documents, book a carrier or freight forwarder, complete customs filing and examination as applicable, hand over cargo, obtain the transport document, and coordinate documents and payment follow-up. Perishable, hazardous, plant, food, and controlled products can require extra handling or approvals.",
    "Request comparable sea, air, courier, or multimodal quotations that state origin and destination charges, transit time, cut-offs, free time, insurance, and exclusions. Confirm who books transport and clears export/import under the chosen Incoterm. Use ICEGATE and a qualified customs broker for filing guidance, and verify the buyer's import permit and destination rules before cargo leaves.",
    [source("ICEGATE", icegate), source("ICEGATE Compliance Information Portal", customsPortal), source("DGFT ITC(HS) policy", policy), source("ICC Incoterms® rules", iccIncoterms)]
  ),
  createGuide(
    "calculate-freight-customs-and-shipping-costs",
    "How do I calculate freight charges, customs duties, and total shipping costs?",
    "Pricing and Logistics",
    "Separate freight and handling quotations from customs assessments; duties vary by HS code, origin, destination, and trade measures.",
    "/products/Machinery.jpg",
    "Machinery shipment requiring freight and customs-cost planning",
    "Freight depends on mode, route, cargo dimensions and weight, service level, fuel or peak surcharges, and origin/destination handling. Customs duty and taxes depend on tariff classification, customs value, country of origin, preference claims, and current measures in the importing country. Indian export policy and any export duties or restrictions should also be checked for the exact product. A freight quote is not a complete landed-cost estimate.",
    "Ask the carrier or forwarder for an itemized quote using the exact dimensions, gross weight, pickup and delivery points, and Incoterm. Ask the importer or a destination customs professional to verify classification, customs value, duty, VAT/GST, and local fees. Use official tariff and compliance tools where available and document what is included or excluded.",
    [source("ICEGATE Compliance Information Portal", customsPortal), source("DGFT ITC(HS) policy", policy), source("CBIC", "https://www.cbic.gov.in/"), source("ICC Incoterms® rules", iccIncoterms)]
  ),
  createGuide(
    "receive-international-payments-safely",
    "How do exporters receive payments from international buyers safely?",
    "Payments and Risk",
    "Agree payment currency, timing, banking route, charges, and non-payment remedies in a written contract, then confirm compliance with your bank.",
    "/products/Cashew_Nuts.jpeg",
    "Export products and cross-border payment coordination",
    "Common structures include advance payment, documentary collection, documentary credit, and open-account terms. Each shifts risk and cost differently. For a new buyer, avoid unsecured credit until identity and payment history are established. Export receipts must follow current RBI/FEMA requirements and be handled through permitted banking channels; currency, third-party payer arrangements, realization periods, and reporting are rule-specific and can change.",
    "Ask your authorised dealer bank to review the contract, buyer, payment route, and required documents before shipment. Consider a bank-issued documentary credit with terms your bank accepts, staged advances, or ECGC cover where eligible. Confirm who bears bank charges and FX movement, and never release goods based only on a screenshot or an unverified payment confirmation.",
    [source("RBI Master Direction: Export of Goods and Services", rbi), source("ECGC", ecgc), source("ICC", icc)]
  ),
  createGuide(
    "letter-of-credit-how-it-protects-exporter",
    "What is a Letter of Credit, and how does it protect exporters?",
    "Payments and Risk",
    "A documentary credit is a bank undertaking subject to its terms and compliant documents; it does not remove all buyer, bank, or document risk.",
    "/products/Imports_Exports.jpeg",
    "International trade paperwork used with a letter of credit",
    "In a documentary credit, the issuing bank undertakes to honour a complying presentation under the credit's terms and applicable rules. It can reduce some payment risk compared with unsecured open account, but it is not an unconditional promise that any shipment will be paid. The issuing bank's creditworthiness, whether the credit is confirmed, expiry and presentation terms, document requirements, and discrepancies all matter.",
    "Before accepting a credit, have your bank or trade-finance specialist review it against the sales contract and your ability to produce every required document. Confirm the latest applicable ICC rules stated in the credit, costs, presentation place, expiry, and amendment process. Do not ship until material discrepancies are corrected and the bank confirms the instrument is workable.",
    [source("ICC trade finance", icc), source("RBI export guidance", rbi)]
  ),
  createGuide(
    "find-international-buyers-linkedin-email-portals",
    "How do I find international buyers through LinkedIn, email, and trade portals?",
    "Finding Buyers",
    "Use targeted outreach based on a researched buyer profile; portals and social networks are discovery tools, not verification services.",
    "/products/Imports_Exports.jpeg",
    "Buyer outreach and international trade channels",
    "Start with a narrow product-market profile and identify importers, distributors, processors, or wholesalers whose business actually matches it. Trade Connect and APEDA AgriExchange can support discovery in relevant categories; LinkedIn, chambers, events, and email can help reach decision-makers. Avoid mass generic messages and claims that cannot be supported with specifications, capacity, test reports, or references.",
    "Send a concise message with product, grade, origin, available quantity, packaging, certifications actually held, and a clear next step. Research each company independently, use a business domain, and verify the recipient's authority. Keep a simple record of outreach and follow-up, and move interested prospects to a formal specification sheet, quotation, and due-diligence process.",
    [source("Trade Connect ePlatform", tradeConnect), source("APEDA AgriExchange", agriExchange), source("FIEO", fieo)]
  ),
  createGuide(
    "gst-registration-and-export-treatment",
    "Is GST registration compulsory for exporters, and how does GST apply?",
    "Compliance",
    "GST registration and export treatment depend on the person, turnover, transaction, and current law; exports are treated as zero-rated supplies under GST law.",
    "/products/Basmathi_Rice.png",
    "Food-grain exports requiring appropriate tax documentation",
    "Do not assume every small exporter has the same GST registration obligation. Applicability depends on the taxpayer and transaction under current GST law, and should be confirmed with a chartered accountant or tax professional. Exports are treated as zero-rated supplies; a registered taxpayer may follow the applicable route, including export under a valid Letter of Undertaking without payment of integrated tax or payment-and-refund treatment, subject to current rules and eligibility.",
    "Review the GST Portal's current registration, return, LUT, and refund instructions with an accountant before the first export. Where using an LUT, file the current form before the relevant supply and renew or re-file as required for the financial year. Keep invoices, shipping and bank records aligned, and verify current notifications because tax rules and forms may be amended.",
    [source("GST Portal", gst), source("GST Portal: LUT filing guide", lut), source("CBIC", "https://www.cbic.gov.in/")]
  ),
  createGuide(
    "apeda-spices-fssai-product-registrations",
    "Which products require APEDA, Spices Board, FSSAI, or other product registrations?",
    "Compliance",
    "The competent body depends on the product and activity; identify the exact commodity and verify current registration and certificate rules.",
    "/products/Chillies.jpg",
    "Spices and agricultural products with product-specific export checks",
    "APEDA registration applies to relevant scheduled agricultural and processed products under its legislation and current procedures; it is not a blanket licence for every exporter or commodity. Spices exports have their own Spices Board registration and certificate processes. Food business operators must assess applicable FSSAI licensing, and plant or plant products may need phytosanitary and import-permit compliance. Additional destination standards, testing, traceability, or establishment approvals may apply.",
    "Identify the product's HS code, ingredients or botanical identity, degree of processing, packaging, and intended destination. Check DGFT export policy, APEDA's current registration procedure, Spices Board exporter instructions, FSSAI/FoSCoS, and plant quarantine requirements. Obtain written confirmation from the relevant authority and importer for the specific shipment; do not infer the requirement from another product in the same broad category.",
    [source("APEDA registration procedure", apedaRegistration), source("APEDA", apeda), source("Spices Board exporter registration", spicesBoard), source("FSSAI/FoSCoS licensing", fssai), source("Plant Quarantine Information System", pqis)]
  ),
  createGuide(
    "find-correct-hs-code-export-product",
    "How do I find the correct HS code for my export product?",
    "Documentation",
    "Classify the actual product using its composition, function, processing, and tariff rules; do not rely only on a marketplace listing or buyer suggestion.",
    "/products/Machinery.jpg",
    "Machinery requiring accurate customs classification",
    "The Harmonized System classifies traded goods, but the correct code depends on technical and commercial facts about the item. India uses its ITC(HS) tariff and policy schedules; destination countries may extend the code to more digits and apply their own legal interpretation. Classification can affect export restrictions, import duties, licences, statistics, and preferential origin treatment.",
    "Prepare a precise product description, composition, function, processing, technical catalogue, and intended use. Search DGFT's current ITC(HS) policy and customs resources, then confirm destination classification with the importer or a qualified customs professional. Keep the written reasoning and use the verified code consistently across invoice, shipping bill, certificate, and customs declaration.",
    [source("DGFT ITC(HS) import/export policy", policy), source("ICEGATE Compliance Information Portal", customsPortal), source("WCO Harmonized System", "https://www.wcoomd.org/en/topics/nomenclature/overview/what-is-the-harmonized-system.aspx")]
  ),
  createGuide(
    "government-export-schemes-incentives-loans",
    "What government schemes, export incentives, loans, and subsidies are available?",
    "Government Support",
    "Schemes change and eligibility is specific. Check current DGFT, APEDA, and MSME notifications before including any benefit in a business plan.",
    "/products/Imports_Exports.jpeg",
    "Indian trade and export support programs",
    "Potential support may include DGFT trade-policy schemes, product-authority assistance, MSME programs, credit facilities from banks, and export-credit insurance. Benefits are not automatic: each has current eligibility, product, investment, documentation, and export-obligation conditions. For example, DGFT describes EPCG in relation to capital goods and export obligations; it is not a general cash grant for every new trader. APEDA publishes current scheme notices for covered sectors.",
    "Search DGFT's live services and notifications, APEDA's current financial-assistance notices, and official Ministry of MSME portals. Read the current scheme guidelines and application window; ask the administering body and lender to confirm eligibility in writing before committing. Do not rely on old incentive rates, social-media summaries, or an agent's promise of a subsidy.",
    [source("DGFT schemes and services", schemes), source("DGFT EPCG", "https://www.dgft.gov.in/CP/epcg"), source("APEDA current programs", apeda), source("Udyam Registration", msmE)],
    true
  ),
  createGuide(
    "international-trade-fairs-buyer-seller-meetings",
    "How can I participate in international trade fairs and buyer–seller meetings?",
    "Finding Buyers",
    "Find events through relevant export-promotion bodies and organizers, then prepare for buyer meetings with a compliant, specific offer.",
    "/products/Cashew_Nuts.jpeg",
    "Product display for an international buyer-seller event",
    "Trade fairs and buyer-seller meetings can help exporters meet importers, distributors, and sector specialists, but attendance does not guarantee orders. Look for APEDA events for eligible agricultural categories, export promotion council programs, FIEO events, Trade Connect listings, and India Trade Promotion Organisation events. Check whether the event is an exhibitor fair, buyer mission, or B2B meeting and what selection criteria or costs apply.",
    "Prepare a concise company profile, product specifications, realistic capacity, samples where permitted, pricing basis, packaging details, certifications actually held, and target-market questions. Confirm current visa, sample-carrying, temporary export, customs, and payment rules. Follow up promptly, verify buyer identities, and record agreed next steps without promising unverified supply or regulatory compliance.",
    [source("APEDA events and trade fairs", "https://apeda.gov.in/TradeFairs"), source("Trade Connect", tradeConnect), source("FIEO", fieo), source("India Trade Promotion Organisation", itpo), source("RBI guidance on overseas fairs", rbi)]
  ),
  createGuide(
    "prepare-export-quotation-invoice-catalogue",
    "How do I prepare a professional export quotation, invoice, and product catalogue?",
    "Documentation",
    "Use consistent product specifications and clearly state quantity, packing, price basis, validity, payment, shipment, and document conditions.",
    "/products/Basmathi_Rice.png",
    "Rice products presented for an export quotation and catalogue",
    "A professional quotation identifies seller and buyer, product description and grade, quantity, packing, unit price and currency, delivery term with named place and Incoterms® edition, shipment window, payment method, quote validity, inspection, and exclusions. The commercial invoice and packing list must reflect the confirmed transaction and customs declarations. A catalogue should present only products, capacities, grades, certificates, and images that the business can substantiate.",
    "Create a controlled template and obtain tax and customs review for your transaction. Confirm HS classification, origin, weights, package marks, payment instructions, and product-specific certificates before finalising documents. Do not copy an old invoice or call an estimate a firm quotation if freight, duties, stock, or exchange rates are unconfirmed.",
    [source("DGFT", dgft), source("ICEGATE", icegate), source("ICC Incoterms® rules", iccIncoterms), source("GST Portal", gst)]
  ),
  createGuide(
    "common-new-exporter-mistakes",
    "What are the most common mistakes new importers and exporters make?",
    "Getting Started",
    "Common risks include guessing the HS code, quoting before costing, skipping buyer checks, and assuming a certificate or incentive applies universally.",
    "/products/Imports_Exports.jpeg",
    "Trade planning documents before a shipment",
    "Avoid choosing a product only because a blog calls it profitable; ignoring export restrictions or destination standards; using a copied HS code; quoting without full logistics and finance costs; and accepting a buyer without independent checks. Other frequent problems include vague quality terms, mismatched invoice and packing data, unsuitable Incoterms, insecure payment terms, and assuming that IEC, RCMC, APEDA, or FSSAI approval covers every product or market.",
    "Use a pre-shipment checklist: product and HS verification, supplier and buyer due diligence, contract and specifications, tax and licences, packaging and inspection, itemised cost, payment protections, shipping booking, consistent documents, and bank follow-up. Verify live rules through DGFT, customs, tax, RBI, and product authorities. Ask a qualified adviser when classification, tax, or foreign-exchange treatment is uncertain.",
    [source("DGFT ITC(HS) policy", policy), source("ICEGATE", icegate), source("RBI export guidance", rbi), source("GST Portal", gst)]
  ),
  createGuide(
    "scale-export-business-long-term-relationships",
    "How can I scale my import–export business and build long-term international trade relationships?",
    "Growing a Trade Business",
    "Scale repeatable, profitable transactions first: reliable supply, disciplined compliance, buyer retention, working capital, and measured market expansion.",
    "/products/Coffee_Seeds.jpeg",
    "A product prepared for repeat international trade",
    "Sustainable scaling usually comes from executing repeat orders reliably, not from adding many unrelated products at once. Standardise specifications, supplier checks, quality control, packaging, shipment documentation, costing, and payment follow-up. Track on-time delivery, claims, contribution margin, cash-conversion cycle, repeat purchase, and buyer concentration. Expand to new destinations only after checking their import rules, tariffs, logistics, and customer support requirements.",
    "Build supplier backups and written service levels, protect working capital, review buyer and country credit exposure, and use bank or ECGC support where suitable. Keep compliance records current, train the team, and create feedback loops after every shipment. Use APEDA or Trade Connect market data to evaluate expansion, but validate opportunities through real buyer conversations and test orders.",
    [source("APEDA AgriExchange", agriExchange), source("Trade Connect", tradeConnect), source("ECGC", ecgc), source("RBI export guidance", rbi)]
  ),
];
