import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';

import '../../../widgets/order_item.dart';

enum OrderStatus {
  DELIVERED,
  CANCELED
}

class OrderDetails {
  String orderNumber;
  String orderPrice;
  OrderStatus orderStatus;
  String orderDate;

  OrderDetails(this.orderNumber, this.orderPrice, this.orderStatus, this.orderDate,);
}

class OrdersScreen extends StatelessWidget {
   OrdersScreen({super.key});

  List<OrderDetails> orders = [
    OrderDetails("345", "700", OrderStatus.DELIVERED, "October 26, 2014"),
    OrderDetails("346", "452", OrderStatus.CANCELED, "October 14, 2016"),
    OrderDetails("347", "281", OrderStatus.DELIVERED, "July 26, 2017"),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          leading: SizedBox.shrink(),
          backgroundColor: Colors.white,
          title: Text(
            "Orders",
            style: TextStyle(
              color: AppColors.primaryColor,
              fontSize: 24,
              fontWeight: FontWeight.w700,
            ),
          ),
          bottom: TabBar(
            unselectedLabelStyle: TextStyle(
              color: AppColors.secondaryColor,
              fontSize: 20,
              fontWeight: FontWeight.w400,
            ),
            labelStyle: TextStyle(
              color: AppColors.primaryColor,
              fontSize: 20,
              fontWeight: FontWeight.w400,
            ),
            indicatorColor: AppColors.primaryColor,
            indicatorWeight: 4,
            indicatorSize: TabBarIndicatorSize.label,
            dividerColor: Colors.grey.shade300,
            tabs: [
              Tab(text: "Ongoing"),
              Tab(text: "History"),
            ],
          ),
          elevation: 0,
          scrolledUnderElevation: 0,
        ),

        body: Container(
          color: Colors.white,
          child: TabBarView(
            children: [
              ListView.builder(
                itemCount: orders.length,
                itemBuilder: (context, index) => OrderItem(
                  orderNumber: orders[index].orderNumber,
                  orderPrice: orders[index].orderPrice,
                  orderStatus: (orders[index].orderStatus == OrderStatus.DELIVERED)? "Delivered" : "Canceled",
                  orderDate: orders[index].orderDate,
                  isDelivared: (orders[index].orderStatus == OrderStatus.DELIVERED)? true : false,
                ),
              ),
              ListView.builder(
                itemCount: orders.length,
                itemBuilder: (context, index) => OrderItem(
                  orderNumber: orders[index].orderNumber,
                  orderPrice: orders[index].orderPrice,
                  orderStatus: (orders[index].orderStatus == OrderStatus.DELIVERED)? "Delivered" : "Canceled",
                  orderDate: orders[index].orderDate,
                  isDelivared: (orders[index].orderStatus == OrderStatus.DELIVERED)? true : false,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
