localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量



class Product{
    constructor(id,title,price,imgSrc){
        this.id=id;
        this.title=title;
        this.price=price;
        this.imgSrc=imgSrc;
    }
}

//订单类
class Order{
    constructor(product,qty,selectStatus){
      //订单成员
      this.id=product.id;
      this.title=product.title;
      this.price=product.price;
      this.imgSrc=product.imgSrc;
      this.qty=qty;
      this.selectStatus=selectStatus;
    }
  }

  //-------------------
  //购物车数据类，用于记录购物车数据。

  class CartData{
      constructor(){
          this.orderList=new Array();
          this.totalQty=0;
          this.totalAmount=0;
          this.units=0;
      }
  }


//   购物车数据操作

class ShoppingCart{

    //从本地储存中获取购物车数据
    getDataFromLocalStorage(){
        let lzzyCart=localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart==null||lzzyCart==''){
            return new CartData();
        }
        else{
            return JSON.parse(lzzyCart);
        }
    }
    //将购物车数据写入本地
    setDataToLocalSatorge(CartData){
        //清除原有存储写入新列表
        localStorage.removeItem('lzzyCart');
        //写入本地存储
        localStorage.setItem('lzzyCart',JSON.stringify(cartData));
    }
    
    //获取选中对象的订单列表
    getSelectedList(){

    }
    //获取选中对象的列表的总数量
    getSelectdeList(){

    }
    //获取选中对象的列表的总价格
    getSelectedAmount(){

    }
    //设置购物车订单选择状态
    setItemselectStatus(id,selectStatus){

    }
    //加入购物车(写入)
}
//   var order=new Order(p,2,true);

//   var title =ordr.title;