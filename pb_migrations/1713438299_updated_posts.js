/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rw3vs8hhmeu3dw2")

  collection.indexes = [
    "CREATE INDEX `idx_t6reUus` ON `posts` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rw3vs8hhmeu3dw2")

  collection.indexes = []

  return dao.saveCollection(collection)
})
