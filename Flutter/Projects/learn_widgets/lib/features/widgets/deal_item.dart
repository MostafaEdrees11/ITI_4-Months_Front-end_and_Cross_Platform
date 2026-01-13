import 'package:flutter/material.dart';

import '../../core/resources/app_colors.dart';

class DealItem extends StatelessWidget {
  const DealItem({
    super.key,
    required this.dealItemImageSrc,
    required this.dealItemTitle,
    required this.dealItemAmount,
    required this.dealItemPrice,
  });

  final String dealItemImageSrc;
  final String dealItemTitle;
  final String dealItemAmount;
  final String dealItemPrice;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      padding: EdgeInsets.symmetric(vertical: 16, horizontal: 8),
      margin: EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(25),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.7),
            offset: Offset(2, 2),
            blurRadius: 4.0,
            spreadRadius: 1.0,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: Center(child: Image.asset(dealItemImageSrc))),
          SizedBox(height: 4,),
          Text(
            dealItemTitle,
            style: TextStyle(
              color: AppColors.secondaryColor,
              fontSize: 15,
              fontWeight: FontWeight.w700,
            ),
          ),
          Text(
            dealItemAmount,
            style: TextStyle(
              color: AppColors.greyTextColor,
              fontSize: 12,
              fontWeight: FontWeight.w400,
            ),
          ),
          Row(
            // mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "\$$dealItemPrice",
                style: TextStyle(
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                ),
              ),
              Spacer(),
              CircleAvatar(
                radius: 15,
                backgroundColor: Colors.green,
                child: Icon(Icons.add, color: Colors.white),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
