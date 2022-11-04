import {
  addRxPlugin,
  createRevision,
  createRxDatabase,
  parseRevision,
} from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'; // TODO only add this in dev mode
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';

import { blockSchema } from './schema/Block.schema';
import { conflictHandler } from './conflict-handler';
import { documentSchema } from './schema/Document.schema';

addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBLeaderElectionPlugin);
addRxPlugin(RxDBUpdatePlugin);

export const createDatabase = async () => {
  const database = await createRxDatabase({
    name: 'sundaedb',
    storage: getRxStorageDexie(),
  });

  await database.addCollections({
    blocks: {
      schema: blockSchema as any,
      conflictHandler: conflictHandler as any,
    },
    documents: {
      schema: documentSchema as any,
      conflictHandler: conflictHandler as any,
    },
  });

  return database;
};
