import 'package:flutter/material.dart';
import '../../core/resources/app_colors.dart';

class OrderItem extends StatelessWidget {
  OrderItem({super.key, required this.orderNumber, required this.orderPrice, required this.orderStatus, required this.orderDate, this.isDelivared = true});

  final String orderNumber;
  final String orderPrice;
  final String orderStatus;
  final String orderDate;
  bool isDelivared;


  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(4.0),
          child: ListTile(
            leading: CircleAvatar(
              backgroundColor: AppColors.primaryColor,
              radius: 25,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Image.asset("assets/images/shopping_basket_24px.png"),
              ),
            ),
            title: Text("Order #$orderNumber", style: TextStyle(
              color: AppColors.secondaryColor,
              fontSize: 18,
              fontWeight: FontWeight.w700,
            ),),
            trailing: Text("\$$orderPrice", style: TextStyle(
              color: AppColors.primaryColor,
              fontSize: 20,
              fontWeight: FontWeight.w700,
            ),),
            subtitle: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(orderStatus, style: TextStyle(
                  color: isDelivared ? AppColors.deliveredColor : AppColors.canceledColor,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),),
                Text(orderDate, style: TextStyle(
                  color: AppColors.secondaryColor,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),)
              ],
            ),
          ),
        ),
        Divider(
          height: 1,
        )
      ],
    );
  }
}
