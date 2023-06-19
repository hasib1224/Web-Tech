from fastapi import FastAPI
from model import Item
import db


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/home")
async def my_home():
    return {"Hello": "Home"}


@app.get("/items/me")
def read_item():
    return {"Users"}

@app.get("/items/{id2}")
def read_item(id2:str):
    return {"items": id2}



# Default query Parameters
@app.get("/item/")
async def read_item(skip:int=0,limit:int=10):
    return {"skip": skip,"LImit":limit}


#Optional Query Parameters
@app.get("/item/{item_id}")
async def read_item(item_id:str,q:str=None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}

@app.get("/item2/{item_id}")
async def read_item(item_id:str,q:str=None,short:bool=False):
    item={"item_id":item_id}
    if q:
        item.update({"q":q})
        # return {"item_id": item_id, "q": q}

    if not short:
        item.update(
            {"Description": "bdhfbdjhcbdjhcb"}
        )
        # return{"Boolean enter":"bfhdb"}
    return item

#Required Query PArameteters (Here q is required )
@app.get("/item3/{item_id}")
async def read_item(item_id:str,q:str):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}


#Path Parameters (File Path)
@app.get("/items/{file_path:path}")
def read_item(file_path:str):
    return {"file_path": file_path}


@app.post('/items/', response_model=Item)
async def create_item(item: Item):
    await db.insert(item)
    return item


#
# @app.get("/int/{id}",response_model=int)
# def read_root(id:int):
#     return id
#
# @app.get("/int/{id}",response_model=int)
# def read_root(id:int):
#     return id
#
#
# @app.get("/bool/{id}", response_model=bool)
# def read_bool(id: bool):
#     return bool(id)
#
#
#
# @app.post("/item/",response_model=Item)
# async def post_item(item: Item):
#     return item
#
# @app.put("/item/",response_model=Item)
# async def put_item(item: Item):
#     return item
#
# @app.delete("/item/",response_model=Item)
# async def delete_item(item: Item):
#     return item
#
#
#
#
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}