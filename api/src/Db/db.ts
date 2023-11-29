import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'

// you would have to import / invoke this in another file
export async function openDb () {
  return open(
    'moose.db',
    {}
  )
}

export async function createDb (dbConnection: Database) {
    const createTableSql = `CREATE TABLE IF NOT EXISTS Moose
                            (clientId real not Null, 
                            sightingId integer not Null,
                            date text not Null,
                            lat real not Null,
                            long real not Null,
                            lifestage text,
                            gender text,
                            health text);`

    dbConnection.run(createTableSql)
}

export async function insertMeese (dbConnection: Database, postbody: any) {
  let insertSQL = 'INSERT INTO Moose (clientId, sightingId, date, lat, long, lifestage, gender, health) VALUES '
  const sightingId = Math.floor(Math.random() * 10001);
  postbody.moose.map(moose => {
    insertSQL += `(${postbody.clientID}, ${sightingId}, ${JSON.stringify(postbody.date)}, ${postbody.location[0]}, ${postbody.location[1]}, ${JSON.stringify(moose?.lifestage || null)}, ${JSON.stringify(moose?.gender || null)}, ${JSON.stringify(moose?.health || null)}),`
  })
  insertSQL = insertSQL.substring(0, insertSQL.length-1);
  console.log(insertSQL);
  dbConnection.run(insertSQL);
}

export async function findUserMeese (dbConnection: Database, user: any) {
  let findUserSQL = 'SELECT * FROM Moose WHERE clientId = ?'
  console.log(findUserSQL);
  dbConnection.run(findUserSQL, user);
}
