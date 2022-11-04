import {
  DeepReadonlyObject,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const blockSchemaLiteral: DeepReadonlyObject<RxJsonSchema<any>> = {
  title: 'block schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 15, // <- the primary key must have set maxLength
    },
    documentId: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    createdByUserId: {
      type: 'string',
    },
    modifiedByUserId: {
      type: 'string',
    },
    created: {
      type: 'string',
    },
    updated: {
      type: 'string',
    },
    content: {
      type: 'string',
    },
    style: {
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
    blockProperties: {
      type: 'string',
    },
    replicationRevision: {
      type: 'string',
      minLength: 3,
    },
  },
  required: [
    'documentId',
    'type',
    'createdByUserId',
    'modifiedByUserId',
    'created',
    'updated',
    'replicationRevision',
  ],
};

const schemaTyped = toTypedRxJsonSchema(blockSchemaLiteral);
export type RxBlockDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;
export const blockSchema: DeepReadonlyObject<
  RxJsonSchema<RxBlockDocumentType>
> = blockSchemaLiteral;
