export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  details: string[];
  contentSections?: {
    heading: string;
    description?: string;
    items?: string[];
    note?: string;
  }[];
};

export const products: Product[] = [
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    image: "/products/Cashew_Nuts.jpeg",
    alt: "Premium cashew nuts",
    description:
      "Cashew kernels for international buyers, with grade, product specifications, and packing discussed according to each order.",
    details: [
      "Catalogue-listed grades: W-180, W-240, and W-320",
      "Other sizes may be available; confirm the current options with our team",
      "Order quantities and packing are discussed by enquiry",
    ],
    contentSections: [
      {
        heading: "Cashew grades and sizing",
        description:
          "The Trishulan International catalogue identifies these kernel grades:",
        items: ["W-180", "W-240", "W-320"],
        note:
          "Other size options are subject to availability. Confirm grades, sizing, product form, and specifications before placing an order.",
      },
      {
        heading: "Quality and product characteristics",
        description:
          "The catalogue states that Trishulan International has served customers since 2010. It also highlights attention to kernel size, colour, consistency, careful handling, and customer-specific requirements, and describes the cashews as having a naturally rich, buttery flavour and crisp texture.",
        note:
          "Ask our team about the specifications and any quality documentation available for the particular lot.",
      },
      {
        heading: "Processing and hygiene",
        description:
          "The catalogue describes processing that includes controlled-temperature boiling of raw cashew nuts and the use of clean water.",
        note:
          "For details about processing, quality checks, and supporting documentation, please contact us before confirming an order.",
      },
      {
        heading: "Packaging and order requirements",
        description:
          "Packing and order arrangements can be discussed to suit the buyer's requirements. Include these details in your enquiry:",
        items: [
          "Required cashew grade or size",
          "Order quantity and preferred packaging",
          "Destination country",
          "Required product specifications or export documents",
        ],
      },
    ],
  },
  {
    slug: "guava-plants",
    name: "Guava Plants",
    image: "/products/Guava_Plants.jpeg",
    alt: "Healthy guava plants",
    description:
      "Guava planting material for growers and nurseries, with varieties and shipping requirements confirmed for each enquiry.",
    details: [
      "Catalogue-listed varieties: Taiwan Pink, Red Diamond, Allahabad, and Safeda",
      "Plant size, quantity, and preferred variety are subject to confirmation",
      "Shipping and applicable export requirements are discussed by destination",
    ],
    contentSections: [
      {
        heading: "Available guava varieties",
        description:
          "The catalogue features multiple guava varieties for buyers to consider:",
        items: ["Taiwan Pink", "Red Diamond", "Allahabad", "Safeda"],
        note:
          "Contact our team to confirm the availability of your preferred variety, plant size, and quantity.",
      },
      {
        heading: "Plant quality and root development",
        description:
          "The catalogue emphasizes plant quality, healthy root development, and propagation techniques intended to support stronger roots.",
        note:
          "Plant size and condition should be confirmed with our team for the current stock before ordering.",
      },
      {
        heading: "Growing guidance",
        description:
          "The following growing points are guidance from the product catalogue. Growing results depend on local conditions and ongoing care.",
        items: [
          "Sunlight: choose a site receiving at least 8 hours of direct sunlight daily.",
          "Soil: use loose, well-draining soil enriched with organic matter.",
          "Soil preparation: the catalogue recommends mixing approximately 30% compost or well-rotted farmyard manure into the planting soil.",
          "Care: provide suitable soil conditions, adequate sunlight, and appropriate care for healthy plant development.",
        ],
      },
      {
        heading: "Packaging and shipping",
        description:
          "Shipping arrangements can be discussed according to buyer requirements and preferences.",
        note:
          "Confirm plant availability, quantities, packaging, delivery arrangements, and export requirements applicable to the destination before ordering.",
      },
    ],
  },
  {
    slug: "coffee-beans",
    name: "Coffee Beans",
    image: "/products/Coffee_Seeds.jpeg",
    alt: "Coffee beans",
    description: "Coffee products for domestic and international sourcing enquiries.",
    details: ["Green Arabica and Robusta beans", "Roasted coffee beans", "Coffee powder", "Product specifications and packaging discussed by enquiry"],
  },
  {
    slug: "bananas",
    name: "Bananas",
    image: "/products/Bananas.jpeg",
    alt: "Fresh bananas",
    description: "Banana varieties supplied according to buyer requirements and market availability.",
    details: ["Cavendish, Robusta and Nendran varieties", "Tissue-cultured banana plants are also available for enquiries", "Handling, packaging and quantities confirmed for each requirement"],
  },
  {
    slug: "peanuts",
    name: "Peanuts",
    image: "/products/Peanuts.jpg",
    alt: "Peanuts",
    description: "Groundnuts and peanut products for commercial sourcing requirements.",
    details: ["Bold and Java varieties", "Shelled and unshelled groundnuts", "Peanut kernels and blanched peanuts", "Grades and packaging based on buyer specifications"],
  },
  {
    slug: "biodegradable-covers",
    name: "Biodegradable Covers",
    image: "/products/Biodegradable_Covers.jpg",
    alt: "Biodegradable packaging covers",
    description: "Biodegradable and compostable alternatives for packaging and carrying needs.",
    details: ["Biodegradable carry bags and garbage bags", "Compostable shopping bags", "Compostable packaging covers", "Eco-friendly food packaging materials"],
  },
  {
    slug: "basmati-rice",
    name: "Basmati Rice",
    image: "/products/Basmathi_Rice.png",
    alt: "Basmati rice",
    description: "Basmati varieties for quality-focused domestic and international buyers.",
    details: ["1121 Basmati", "Traditional Basmati", "Pusa Basmati", "Grades, packaging and quantities discussed by enquiry"],
  },
  {
    slug: "red-chillies",
    name: "Red Chillies",
    image: "/products/Chillies.jpg",
    alt: "Red chilli product",
    description: "Whole dried chillies and chilli products sourced to buyer specifications.",
    details: ["Whole dried red chillies and chilli powder", "Byadgi, Guntur Sannam and Teja varieties", "Grades and packaging formats discussed by enquiry"],
  },
  {
    slug: "furniture",
    name: "Furniture",
    image: "/products/Furniture.jpeg",
    alt: "Furniture products",
    description: "Furniture sourcing based on client specifications and market availability.",
    details: ["Product type, material, dimensions and finish can be specified by the buyer", "Packaging and order quantities discussed for each requirement", "Availability confirmed during enquiry"],
  },
  {
    slug: "machinery",
    name: "Machinery",
    image: "/products/Machinery.jpg",
    alt: "Industrial machinery",
    description: "Machinery and equipment sourcing coordinated around the client's stated requirements.",
    details: ["Share equipment type and intended application", "Technical specifications and quantity reviewed per enquiry", "Sourcing and availability confirmed against market conditions"],
  },
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    image: "/products/Dry_Fruits.jpg",
    alt: "Dry fruits including almonds and walnuts",
    description: "A range of nuts and dry fruits for buyer-specific sourcing enquiries.",
    details: ["Almonds and walnuts", "Raisins and dates", "Other dry fruits subject to availability", "Grades, packaging and quantities discussed by enquiry"],
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    image: "/products/Vegetables.jpg",
    alt: "Fresh vegetables",
    description: "Vegetable sourcing for agricultural trade and customer-specific requirements.",
    details: ["Product selection depends on season and market availability", "Grades, packing formats and quantities discussed by enquiry", "Import or export conditions are confirmed for the destination market"],
  },
  {
    slug: "fruits",
    name: "Fruits",
    image: "/products/Fruits.jpeg",
    alt: "Fresh fruits",
    description: "Fresh fruit sourcing across selected varieties and seasonal produce.",
    details: ["Mangoes: Alphonso, Kesar and Banganapalli", "Fresh papaya and other seasonal fruits", "Bananas and guava varieties are listed separately", "Availability, packaging and quantities confirmed by enquiry"],
  },
  {
    slug: "raw-materials",
    name: "Raw Materials",
    image: "/products/Imports_Exports.jpeg",
    alt: "Imported raw materials",
    description: "Agricultural and other raw materials sourced or imported according to client requirements.",
    details: ["Agricultural raw materials and processed food products", "Other materials can be discussed for client-specific import requirements", "Specifications, destination and quantity are reviewed before confirming availability"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
