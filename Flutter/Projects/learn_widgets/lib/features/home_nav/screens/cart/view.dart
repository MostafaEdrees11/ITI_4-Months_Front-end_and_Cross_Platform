import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';

import '../../../widgets/cart_item.dart';

class CartItemDetails {
  String imageSrc;
  String title;
  String count;
  String price;
  String priceUnit;

  CartItemDetails(
    this.imageSrc,
    this.title,
    this.count,
    this.price,
    this.priceUnit,
  );
}

class CartScreen extends StatelessWidget {
  const CartScreen({super.key});

  @override
  Widget build(BuildContext context) {


    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        title: Text(
          "Cart",
          style: TextStyle(
            color: AppColors.primaryColor,
            fontSize: 24,
            fontWeight: FontWeight.w700,
          ),
        ),
        leading: SizedBox.shrink(),
        elevation: 0,
        scrolledUnderElevation: 0,
      ),
      backgroundColor: Colors.white,

      body: DismissibleExample(),
    );
  }
}

class DismissibleExample extends StatefulWidget {
  const DismissibleExample({super.key});

  @override
  State<DismissibleExample> createState() => _DismissibleExampleState();
}

class _DismissibleExampleState extends State<DismissibleExample> {
  List<int> items = List<int>.generate(100, (int index) => index);

  List<CartItemDetails> cartItems = [
    CartItemDetails(
      "assets/images/apple.png",
      "Red Apple",
      "2",
      "4.99",
      "kg",
    ),
    CartItemDetails(
      "assets/images/banana.png",
      "Original Banana",
      "2",
      "5.99",
      "kg",
    ),
    CartItemDetails(
      "assets/images/Avocado.png",
      "Avocado Bowl",
      "1",
      "24",
      "st",
    ),
    CartItemDetails("assets/images/Salmon.png", "Salmon", "2", "50", "kg"),
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: cartItems.length,
              itemBuilder: (context, index) => CartItem(
                cartItemImageSrc: cartItems[index].imageSrc,
                cartItemTitle: cartItems[index].title,
                cartItemCount: cartItems[index].count,
                cartItemPrice: cartItems[index].price,
                cartItemPriceUnit: cartItems[index].priceUnit,
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.primaryColor,
              fixedSize: Size(343, 50),
            ),
            child: Text(
              "CheckOut",
              style: TextStyle(
                color: Colors.white,
                fontSize: 18,
                fontWeight: FontWeight.w700,
              ),
            ),
          ),
        ],
      ),
    );
  }
}