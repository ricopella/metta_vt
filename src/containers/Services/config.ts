import { ServiceCategory } from '../../types';

const SERVICES_CATEGORY_ITEMS: ServiceCategory[] = [
  {
    name: 'classic massage',
    items: [
      {
        name: 'focused massage',
        description: 'A dedicated massage customized to your problem areas.',
        variants: [
          {
            name: '30 minutes',
            price: 40,
          },
        ],
      },
      {
        name: 'deep tissue massage',
        description:
          'Techniques that utilize deep-tissue/deep-muscle massage targeting musculature and fascia, with an emphasis on altering structure and muscle restrictions. Deep tissue massage focuses more on releasing chronic muscle tension, muscle knots and adhesions.',
        variants: [
          {
            name: '60 minutes',
            price: 75,
          },
          {
            name: '90 minutes',
            price: 105,
          },

          {
            name: '120 minutes',
            price: 130,
          },
        ],
      },
      {
        description:
          'Using a blend of Swedish, Ayurvedic, Polynesian and Reflexology massage techniques, this massage is designed to bring total relaxation while soothing achy muscles',
        name: 'relaxation massage',
        variants: [
          {
            name: '60 minutes',
            price: 75,
          },
          {
            name: '90 minutes',
            price: 105,
          },
          {
            name: '120 minutes',
            price: 130,
          },
        ],
      },
      {
        description:
          'This massage focuses on de-stressiing your the feet and head/neck/shoulders. Soothe your feet with shea butter and warm towels and opt for a nourishing coconut oil scalp massage.',
        name: 'rebalance',
        variants: [
          {
            name: '30 minutes',
            price: 40,
          },
          {
            name: '60 minutes',
            price: 75,
          },
        ],
      },
      {
        description: 'The perfect blend of Rebalance and Facial Cupping.',
        name: 'ultimate rebalance',
        variants: [
          {
            name: '80 minutes',
            price: 90,
          },
        ],
      },
      {
        description:
          'This can be a single session or an "add on" 30 minutes of cupping to an existing massage. By creating suction and vacuum pressure, Massage Cupping is used to soften tight muscles, tone attachments, loosen adhesions, lift connective tissue and much more.',
        name: 'massage cupping',
        variants: [
          {
            name: '30 minutes',
            price: 50,
          },
          {
            name: 'Add-On service',
            price: 10,
          },
        ],
      },
      {
        description:
          'Refresh and relax. A hydrating scalp treatment with coconut and jojoba oils, neck and should massage ending with facial cupping to refresh and relax. 60-minute treatment.',
        name: 'head & shoulders',
        variants: [
          {
            name: '60 minutes',
            price: 75,
          },
        ],
      },
      {
        description:
          'Add a 20-minute facial cupping treatment to any service. Gentle cupping to the face, neck and chest. Toning skin and muscle, softening tension in the face, improve circulation, and reduce puffiness. A lovely and relaxing ending to any massage',
        name: 'facial cupping - lift and lymphatic drainage *add-on*',
        variants: [
          {
            name: '20 minutes',
            price: 30,
          },
        ],
      },
      {
        description:
          'Treat your scalp to a hydrating mask. Coconut and jojoba oils with gentle essential oils to hydrate and promote a healthy scalp.',
        name: 'hydrating scalp treatment *add-on*',
        variants: [
          {
            name: '10 minutes',
            price: 10,
          },
        ],
      },
    ],
  },
  {
    name: 'eastern bodywork and therapy',
    items: [
      {
        description:
          'The use of compression, acupressure, and passive stretching allow for energy to flow freely through the body. Health benefits include relief of pain and muscle soreness, increased flexibility, and a simultaneous feeling of relaxation and rejuvenation. Practiced on a firm mat on the floor,  clients are fully clothed throughout the massage.',
        name: 'thai massage',
        subDescription:
          '*It is important that clients bring clean and comfortable clothing to the massage. (Anything you can move around comfortably in)',
        variants: [
          {
            name: '90 minutes',
            price: 115,
          },
          {
            name: '120 minutes',
            price: 140,
          },
        ],
      },
      {
        description:
          'Based on an ancient Chinese therapy, reflexology involves manipulation of specific reflex areas in the feet, hands and ears to stimulate body organs and relieve areas of energetic congestion. This technique is used to reduce pain, increase relaxation, and stimulate circulation of blood lymphatic fluids.',
        name: 'reflexology',
        variants: [
          {
            name: '30 minutes',
            price: 40,
          },
        ],
      },
    ],
  },
  {
    name: 'prenatal massage',
    items: [
      {
        description:
          'Balance through change. Supportive ongoing bodywork to nourish and advocate for mama; addressing symptoms such as nausea, back pain, emotional stress and digestive issues during all trimesters.',
        name: 'prenatal massage',
        variants: [
          {
            name: '60 minutes',
            price: 75,
          },
          {
            name: '90 minutes',
            price: 105,
          },
        ],
      },
    ],
  },
  {
    name: 'couples massage',
    items: [
      {
        description: 'Enjoy a relaxing massage side-by-side.',
        name: 'couples massage',
        subDescription:
          '*Couples massage is by request only. Please email to request massage*',
        variants: [
          {
            name: '60 minutes',
            price: 145,
          },
          {
            name: '90 minutes',
            price: 205,
          },
        ],
      },
    ],
  },
]

export default {
  SERVICES_CATEGORY_ITEMS,
}
