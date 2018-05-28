let Mock = require('mockjs');

module.exports = {
    getValue: Mock.mock({
        "code": 0,
        "msg": "ok",
        "data": {
            "category1|10": [
                {
                    "category_id_1": "A5043",
                    "category_id_1_name": "蔬菜",
                    "origin_stock_num": 20,
                    "origin_stock_value": 12120,
                    "origin_stock_price": 606,
                    "in_stock_num": 10,
                    "in_stock_value": 6060,
                    "in_stock_price": 606,
                    "return_stock_num": 0,
                    "return_stock_value": 0,
                    "return_stock_price": 0,
                    "out_stock_num": 10,
                    "out_stock_value": 9090,
                    "out_stock_price": 909,
                    "increase_stock_num": 2,
                    "increase_stock_value": 6032,
                    "increase_stock_price": 3016,
                    "loss_stock_num": 1,
                    "loss_stock_value": 303,
                    "loss_stock_price": 303,
                    "in_return_stock_num": 1,
                    "in_return_stock_value": 303,
                    "in_return_stock_price": 303,
                    "end_stock_num": 10,
                    "end_stock_value": 6060,
                    "end_stock_price": 606
                }
            ],
            "category2|10": [
                {
                    "category_id_2": "B23449",
                    "category_id_2_name": "叶菜",
                    "origin_stock_num": 10,
                    "origin_stock_value": 4546546,
                    "origin_stock_price": 123132,
                    "in_stock_num": 5,
                    "in_stock_value": 123154,
                    "in_stock_price": 12314,
                    "return_stock_num": 5,
                    "return_stock_value": 13241,
                    "return_stock_price": 21324,
                    "out_stock_num": 6,
                    "out_stock_value": 4212,
                    "out_stock_price": 1232,
                    "increase_stock_num": 4,
                    "increase_stock_value": 123112,
                    "increase_stock_price": 45653,
                    "loss_stock_num": 6,
                    "loss_stock_value": 21344,
                    "loss_stock_price": 1234,
                    "in_return_stock_num": 4,
                    "in_return_stock_value": 54652,
                    "in_return_stock_price": 12314,
                    "end_stock_num": 6,
                    "end_stock_value": 454652,
                    "end_stock_price": 13255
                }
            ],
            "spu|10": [
                {
                    "category_id_1": "A5043",
                    "category_id_1_name": "蔬菜",
                    "category_id_2": "B23449",
                    "category_id_2_name": "叶菜",
                    "spu_id":  "C1176202",
                    "spu_name": "广东白菜",
                    "std_unit_name": "斤",
                    "origin_stock_num": 45,
                    "origin_stock_value": 465456,
                    "origin_stock_price": 12312,
                    "in_stock_num": 102,
                    "in_stock_value": 546512,
                    "in_stock_price": 213256,
                    "return_stock_num": 456,
                    "return_stock_value": 5456122,
                    "return_stock_price": 54512,
                    "out_stock_num": 545,
                    "out_stock_value": 51231254,
                    "out_stock_price": 1213254,
                    "increase_stock_num": 456,
                    "increase_stock_value": 2122263,
                    "increase_stock_price": 45621,
                    "loss_stock_num": 56,
                    "loss_stock_value": 5421311,
                    "loss_stock_price": 123145,
                    "in_return_stock_num": 123,
                    "in_return_stock_value": 5451231,
                    "in_return_stock_price": 12324,
                    "end_stock_num": 123,
                    "end_stock_value": 5461232,
                    "end_stock_price": 12231
                }
            ]
        },
        "pagination": {
            "more":true,
            "page_obj":"D3871892|15371682|T13867|True+D3872356|15471001|T13880|False"
        }
    }),
    addComment: Mock.mock({
        "error": 0,
        "message": "success",
        "result": []
    })
};