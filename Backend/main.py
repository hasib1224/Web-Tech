from typing import Union

from fastapi import FastAPI
from model import Item
from database import *

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/{id}")
def read_root(id:int):
    return {"Hello": "Word"}

@app.get("/int/{id}",response_model=int)
def read_root(id:int):
    return id

@app.get("/int/{id}",response_model=int)
def read_root(id:int):
    return id


@app.get("/bool/{id}", response_model=bool)
def read_bool(id: bool):
    return bool(id)



@app.post("/item/",response_model=Item)
async def post_item(item: Item):
    return item

@app.put("/item/",response_model=Item)
async def put_item(item: Item):
    return item

@app.delete("/item/",response_model=Item)
async def delete_item(item: Item):
    return item




@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}