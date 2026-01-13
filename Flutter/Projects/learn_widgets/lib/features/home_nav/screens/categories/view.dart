import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';
import 'package:learn_widgets/features/widgets/category_item.dart';

import '../../../../core/resources/app_images.dart';
import '../home/view.dart';

class CategoriesScreen extends StatelessWidget {
  CategoriesScreen({super.key, this.showBackButton = false});

  final bool showBackButton;

  List<CategoryItemDetails> categoryItems = [
    CategoryItemDetails(AppImages.fruitsImage, "Fruits", AppColors.fruitsColor),
    CategoryItemDetails(AppImages.vegatablesImage, "Vegtables", AppColors.vegatablesColor,),
    CategoryItemDetails(AppImages.meatImage, "Meat", AppColors.meatColor),
    CategoryItemDetails(AppImages.fishImage, "Fish", AppColors.fishColor),
    CategoryItemDetails(AppImages.seaFoodImage, "Sea Food", AppColors.seaFoodColor),
    CategoryItemDetails(AppImages.juiceImage, "Juice", AppColors.juiceColor),
    CategoryItemDetails(AppImages.eggAndMilkImage, "Egg & Milk", AppColors.eggAndMilkColor),
    CategoryItemDetails(AppImages.iceCreamImage, "Ice cream", AppColors.iceCreamColor),
    CategoryItemDetails(AppImages.cakeImage, "Cake", AppColors.cakeColor),
    CategoryItemDetails(AppImages.bottleImage, "Bottle", AppColors.bottleColor),
    CategoryItemDetails(AppImages.cleanerImage, "Cleaner", AppColors.cleanerColor),
    CategoryItemDetails(AppImages.fruitsImage, "Fruits", AppColors.fruitsColor),
    CategoryItemDetails(AppImages.vegatablesImage, "Vegtables", AppColors.vegatablesColor,),
    CategoryItemDetails(AppImages.meatImage, "Meat", AppColors.meatColor),
    CategoryItemDetails(AppImages.fishImage, "Fish", AppColors.fishColor),
    CategoryItemDetails(AppImages.seaFoodImage, "Sea Food", AppColors.seaFoodColor),
    CategoryItemDetails(AppImages.juiceImage, "Juice", AppColors.juiceColor),
    CategoryItemDetails(AppImages.eggAndMilkImage, "Egg & Milk", AppColors.eggAndMilkColor),
    CategoryItemDetails(AppImages.iceCreamImage, "Ice cream", AppColors.iceCreamColor),
    CategoryItemDetails(AppImages.cakeImage, "Cake", AppColors.cakeColor),
    CategoryItemDetails(AppImages.bottleImage, "Bottle", AppColors.bottleColor),
    CategoryItemDetails(AppImages.cleanerImage, "Cleaner", AppColors.cleanerColor),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        title: Text(
          "Categories",
          style: TextStyle(
            color: AppColors.primaryColor,
            fontSize: 24,
            fontWeight: FontWeight.w700,
          ),
        ),
        leading: showBackButton
            ? GestureDetector(
                onTap: () {
                  Navigator.pop(context);
                },
                child: Icon(
                  Icons.arrow_back_ios_new_outlined,
                  color: AppColors.primaryColor,
                ),
              )
            : SizedBox.shrink(),
        bottom: PreferredSize(
          preferredSize: Size(double.infinity, 50),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: TextFormField(
              decoration: InputDecoration(
                filled: true,
                fillColor: AppColors.formColor,
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.transparent),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: AppColors.primaryColor),
                ),
                hintText: "Search",
                hintStyle: TextStyle(
                  color: AppColors.insideFormColor,
                  fontSize: 16,
                  fontWeight: FontWeight.w400,
                ),
                prefixIcon: Icon(
                  Icons.search,
                  color: AppColors.insideFormColor,
                ),
              ),
            ),
          ),
        ),
        elevation: 0,
        scrolledUnderElevation: 0,
      ),

      body: GridView.builder(
        padding: EdgeInsets.all(8),
        itemCount: categoryItems.length,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          childAspectRatio: 0.75,
          crossAxisCount: 3,
        ),
        itemBuilder: (context, index) => CategoryItem(
          categoryItemImageSrc: categoryItems[index].imageSrc,
          categoryItemTitle: categoryItems[index].title,
          categoryItemColor: categoryItems[index].color,
        ),
      ),
    );
  }
}
