import { RxConflictHandler, RxConflictHandlerInput } from 'rxdb';

export const conflictHandler: RxConflictHandler<any> = function (
  i: RxConflictHandlerInput<any>,
  _context: string
) {
  if (
    i.newDocumentState.replicationRevision ===
    i.realMasterState.replicationRevision
  ) {
    /**
     * If the documents are equal (== have the same replicationRevision)
     * -> we have no conflict.
     */
    return Promise.resolve({
      isEqual: true,
    });
  }

  /**
   * Like the RxDB default conflict handler, we will always
   * drop the fork state and use the master state instead.
   */
  return Promise.resolve({
    isEqual: false,
    documentData: i.realMasterState,
  });
};
