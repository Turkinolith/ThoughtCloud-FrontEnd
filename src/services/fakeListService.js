const listsDB = [
  {
    _id: "0000",
    content: "This is my first list entry.",
    isComplete: false
  },
  {
    _id: "0001",
    content: "This is my second list entry.",
    isComplete: true
  },
  {
    _id: "0002",
    content: "This is my third list entry.",
    isComplete: false
  }
];

export function getLists() {
  return listsDB;
}

export function getList(id) {
  return listsDB.find(e => e._id === id);
}

export function saveList(list) {
  let listInDb = listsDB.find(e => e._id === list._id) || {};
  listInDb.content = list.content;
  listInDb.isComplete = false;

  if (!listInDb._id) {
    listInDb._id = Date.now().toString();
    listsDB.push(listInDb);
  }
  return listInDb;
}

export function deleteList(id) {
  let listInDb = listsDB.find(e => e._id === id);
  listsDB.splice(listsDB.indexOf(listInDb), 1);
  return listInDb;
}
