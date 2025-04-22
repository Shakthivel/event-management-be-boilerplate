'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        event_name: 'AI Bootcamp',
        description: 'Intro to AI concepts',
        event_date_time: '2025-05-01 10:00:00',
        duration: 120,
        location: 'Online',
        thumbnail: 'https://eq47oznpfsr.exactdn.com/wp-content/uploads/2024/08/What-Is-AI-Featured.jpg?lossy=1&quality=70&ssl=1',
        category_id: 1,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Cloud Fundamentals',
        description: 'Basics of AWS and Azure',
        event_date_time: '2025-05-05 14:00:00',
        duration: 90,
        location: 'Hybrid',
        thumbnail: 'https://techsparks.co.in/wp-content/uploads/2021/01/Cloud-computing.jpg',
        category_id: 2,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'DevOps for Beginners',
        description: 'CI/CD fundamentals',
        event_date_time: '2025-05-10 09:00:00',
        duration: 180,
        location: 'Online',
        thumbnail: 'https://images.tpointtech.com/tutorial/devops/images/devops-tutorial.png',
        category_id: 1,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Advanced SQL',
        description: 'Deep dive into SQL performance tuning',
        event_date_time: '2025-05-12 13:00:00',
        duration: 150,
        location: 'New York',
        thumbnail: 'https://cdn.sanity.io/images/oaglaatp/production/feb9c80a48a201140dcfa20559b73ab1b803e59b-1200x800.png?w=1200&h=800&auto=format',
        category_id: 2,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Cloud Native Summit',
        description: 'All about Kubernetes and microservices',
        event_date_time: '2025-05-20 10:30:00',
        duration: 240,
        location: 'San Francisco',
        thumbnail: 'https://cloudxconf.com/wp-content/uploads/2023/08/CloudNative_featured.jpg',
        category_id: 4,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Intro to Cybersecurity',
        description: 'Basic practices for cyber hygiene',
        event_date_time: '2025-05-22 15:00:00',
        duration: 90,
        location: 'Online',
        thumbnail: 'https://www.whizlabs.com/blog/wp-content/uploads/2020/05/introduction-to-cybersecurity.png',
        category_id: 3,
        created_by: 2,
        updated_by: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {});
  }
};
