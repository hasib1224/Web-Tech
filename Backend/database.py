from databases import Database
database = Database('mysql+aiomysql:///root:@localhost:3006/practice')

async def connect_db():
    await database.connect()


#execute
async def insert():
    query="insert into item(name,price) values(:name,:price)"
    values={"name":"laptop","P+price":1000}
    await database .execute(query=query,values=values)