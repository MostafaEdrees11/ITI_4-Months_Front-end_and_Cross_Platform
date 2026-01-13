import 'package:flutter/material.dart';
import '../../core/resources/app_colors.dart';
import 'counter.dart';

class CartItem extends StatelessWidget {
  const CartItem({
    super.key,
    required this.cartItemImageSrc,
    required this.cartItemTitle,
    required this.cartItemCount,
    required this.cartItemPrice,
    required this.cartItemPriceUnit,
  });

  final String cartItemImageSrc;
  final String cartItemTitle;
  final String cartItemCount;
  final String cartItemPrice;
  final String cartItemPriceUnit;

  @override
  Widget build(BuildContext context) {
    return Dismissible(
      direction: DismissDirection.endToStart,
      background: Container(
        alignment: Alignment.centerRight,
        padding: EdgeInsets.only(right: 16),
        color: Colors.red,
        child: Icon(Icons.delete, color: Colors.white),
      ),

      key: UniqueKey(),
      child: Column(
        children: [
          ListTile(
            leading: Image.asset(cartItemImageSrc, width: 70, height: 70),
            title: Text(
              cartItemTitle,
              style: TextStyle(
                color: AppColors.secondaryColor,
                fontSize: 18,
                fontWeight: FontWeight.w700,
              ),
            ),
            subtitle: Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 2),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    width: 98,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(15.0),
                      color: AppColors.formColor,
                    ),
                    padding: EdgeInsets.all(2),
                    child: Counter(),
                  ),
                  Row(
                    children: [
                      Text(
                        "\$$cartItemPrice",
                        style: TextStyle(
                          color: AppColors.secondaryColor,
                          fontSize: 18,
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                      SizedBox(width: 4),
                      Text(
                        cartItemPriceUnit,
                        style: TextStyle(
                          color: AppColors.secondaryColor,
                          fontSize: 12,
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          Divider(thickness: 2, color: AppColors.formColor),
        ],
      ),
    );
  }
}