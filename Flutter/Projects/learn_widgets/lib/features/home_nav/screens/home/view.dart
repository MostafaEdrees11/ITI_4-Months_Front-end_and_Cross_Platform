import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';
import 'package:learn_widgets/core/resources/app_images.dart';
import 'package:learn_widgets/features/widgets/category_item.dart';
import 'package:learn_widgets/features/widgets/deal_item.dart';

import '../categories/view.dart';

class DealItemDetails {
  String imageSrc;
  String title;
  String amount;
  String price;

  DealItemDetails(this.imageSrc, this.title, this.amount, this.price);
}

class CategoryItemDetails {
  String imageSrc;
  String title;
  Color color;

  CategoryItemDetails(this.imageSrc, this.title, this.color);
}

class HomeScreen extends StatelessWidget {
  HomeScreen({super.key});

  List<DealItemDetails> dealItems = [
    DealItemDetails(AppImages.appleImage, "Red Apple", "1kg,price", "4.99"),
    DealItemDetails(
      AppImages.bananaImage,
      "Orginal Banana",
      "1kg,price",
      "5.99",
    ),
    DealItemDetails(AppImages.appleImage, "Red Apple", "1kg,price", "4.99"),
    DealItemDetails(
      AppImages.bananaImage,
      "Orginal Banana",
      "1kg,price",
      "5.99",
    ),
    DealItemDetails(AppImages.appleImage, "Red Apple", "1kg,price", "4.99"),
  ];

  List<CategoryItemDetails> categoryItems = [
    CategoryItemDetails(AppImages.fruitsImage, "Fruits", AppColors.fruitsColor),
    CategoryItemDetails(
      AppImages.vegatablesImage,
      "Vegtables",
      AppColors.vegatablesColor,
    ),
    CategoryItemDetails(AppImages.meatImage, "Meat", AppColors.meatColor),
    CategoryItemDetails(AppImages.fishImage, "Fish", AppColors.fishColor),
    CategoryItemDetails(AppImages.seaFoodImage, "Sea Food", AppColors.seaFoodColor),
    CategoryItemDetails(AppImages.juiceImage, "Juice", AppColors.juiceColor),
    CategoryItemDetails(AppImages.eggAndMilkImage, "Egg & Milk", AppColors.eggAndMilkColor),
    CategoryItemDetails(AppImages.iceCreamImage, "Ice cream", AppColors.iceCreamColor),
    CategoryItemDetails(AppImages.cakeImage, "Cake", AppColors.cakeColor),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 24,),
              Image.asset(AppImages.complimentaryImage),
              SizedBox(height: 48),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Categories",
                    style: TextStyle(
                      color: AppColors.secondaryColor,
                      fontSize: 22,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => CategoriesScreen(showBackButton: true,)));
                    },
                    child: Text(
                      "see all",
                      style: TextStyle(
                        color: AppColors.primaryColor,
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 8),
              SizedBox(
                height: 130,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: categoryItems.length,
                  itemBuilder: (context, index) =>
                      CategoryItem(
                        categoryItemImageSrc: categoryItems[index].imageSrc,
                        categoryItemTitle: categoryItems[index].title,
                        categoryItemColor: categoryItems[index].color,
                      ),
                ),
              ),
              SizedBox(height: 32),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Popular deals",
                    style: TextStyle(
                      color: AppColors.secondaryColor,
                      fontSize: 22,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  Text(
                    "see all",
                    style: TextStyle(
                      color: AppColors.primaryColor,
                      fontSize: 18,
                      fontWeight: FontWeight.w400,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 24),
              SizedBox(
                height: 185,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: dealItems.length,
                  itemBuilder: (context, index) =>
                      DealItem(
                        dealItemImageSrc: dealItems[index].imageSrc,
                        dealItemTitle: dealItems[index].title,
                        dealItemAmount: dealItems[index].amount,
                        dealItemPrice: dealItems[index].price,
                      ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
