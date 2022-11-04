import {
  DeepReadonlyObject,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const documentSchemaLiteral: DeepReadonlyObject<RxJsonSchema<any>> = {
  title: 'document schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 15, // <- the primary key must have set maxLength
    },
    created: {
      type: 'string',
    },
    updated: {
      type: 'string',
    },
    blocks: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    userId: {
      type: 'string',
    },
    workSpaceId: {
      type: 'string',
    },
    object: {
      type: 'string',
      default: 'block',
    },
    archived: {
      type: 'boolean',
    },
    projectId: {
      type: 'string',
    },

    replicationRevision: {
      type: 'string',
      minLength: 3,
    },
  },
  required: ['created', 'updated', 'replicationRevision'],
};

const schemaTyped = toTypedRxJsonSchema(documentSchemaLiteral);
export type RxDocumentDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;
export const documentSchema: DeepReadonlyObject<
  RxJsonSchema<RxDocumentDocumentType>
> = documentSchemaLiteral;
