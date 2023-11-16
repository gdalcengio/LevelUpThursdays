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