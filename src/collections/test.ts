import { CollectionConfig } from 'payload';

export const test: CollectionConfig = {
  slug: 'test',
  labels: {
    singular: 'test',
    plural: 'tests'
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'kin',
      type: 'relationship',
      relationTo: [
        'users',
      ],
      hasMany: false,
      localized: true,
    },
  ],
}

