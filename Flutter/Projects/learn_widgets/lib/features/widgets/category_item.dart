import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';

class CategoryItem extends StatelessWidget {
  const CategoryItem({super.key, required this.categoryItemImageSrc, required this.categoryItemTitle, required this.categoryItemColor});

  final String categoryItemImageSrc;
  final String categoryItemTitle;
  final Color categoryItemColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      margin: EdgeInsets.symmetric(horizontal: 2),
      child: Column(
        children: [
          CircleAvatar(
              radius: 50,
              backgroundColor: categoryItemColor,
              child: Image.asset(categoryItemImageSrc, width: 70, height: 70,)
          ),
          SizedBox(height: 8,),
          Text(categoryItemTitle, style: TextStyle(
            color: AppColors.secondaryColor,
            fontSize: 15,
            fontWeight: FontWeight.w400,
          ),)
        ],
      ),
    );
  }
}
