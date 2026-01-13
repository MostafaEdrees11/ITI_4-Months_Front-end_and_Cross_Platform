import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';
import 'package:learn_widgets/core/resources/app_images.dart';
import 'package:learn_widgets/features/home_nav/screens/cart/view.dart';
import 'package:learn_widgets/features/home_nav/screens/categories/view.dart';
import 'package:learn_widgets/features/home_nav/screens/home/view.dart';
import 'package:learn_widgets/features/home_nav/screens/orders/view.dart';
import 'package:learn_widgets/features/home_nav/screens/profile/view.dart';


class HomeNav extends StatefulWidget {
  const HomeNav({super.key});

  @override
  State<HomeNav> createState() => _HomeNavState();
}

class _HomeNavState extends State<HomeNav> {
  int _selectedIndex = 0;
  List<Widget> screens = [
    HomeScreen(),
    CategoriesScreen(),
    CartScreen(),
    OrdersScreen(),
    ProfileScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.7),
              offset: Offset(2, 2),
              blurRadius: 10.0,
              spreadRadius: 3.0,
            ),
          ],
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(30),
            topRight: Radius.circular(30),
          ),
        ),
        child: BottomNavigationBar(
          selectedItemColor: AppColors.primaryColor,
          selectedFontSize: 16,
          unselectedItemColor: AppColors.secondaryColor,
          unselectedFontSize: 12,

          elevation: 0,

          type: BottomNavigationBarType.fixed,
          onTap: _onItemTapped,
          currentIndex: _selectedIndex,
          items: [
            BottomNavigationBarItem(
              icon: SvgPicture.asset(
                AppImages.homeIcon,
                colorFilter: ColorFilter.mode(
                  _selectedIndex == 0
                      ? AppColors.primaryColor
                      : AppColors.secondaryColor,
                  BlendMode.srcIn,
                ),
              ),
              label: "Home",
            ),
            BottomNavigationBarItem(
              icon: SvgPicture.asset(
                AppImages.categoryIcon,
                width: 25,
                colorFilter: ColorFilter.mode(
                  _selectedIndex == 1
                      ? AppColors.primaryColor
                      : AppColors.secondaryColor,
                  BlendMode.srcIn,
                ),
              ),
              label: "Items",
            ),
            BottomNavigationBarItem(
              icon: SvgPicture.asset(
                AppImages.cartIcon,
                colorFilter: ColorFilter.mode(
                  _selectedIndex == 2
                      ? AppColors.primaryColor
                      : AppColors.secondaryColor,
                  BlendMode.srcIn,
                ),
              ),
              label: "Cart",
            ),
            BottomNavigationBarItem(
              icon: SvgPicture.asset(
                AppImages.ordersIcon,
                width: 25,
                colorFilter: ColorFilter.mode(
                  _selectedIndex == 3
                      ? AppColors.primaryColor
                      : AppColors.secondaryColor,
                  BlendMode.srcIn,
                ),
              ),
              label: "Orders",
            ),
            BottomNavigationBarItem(icon: SvgPicture.asset(
              AppImages.userIcon,
              colorFilter: ColorFilter.mode(
                _selectedIndex == 4
                    ? AppColors.primaryColor
                    : AppColors.secondaryColor,
                BlendMode.srcIn,
              ),
            ), label: "Account"),
          ],
        ),
      ),

      body: screens[_selectedIndex],
    );
  }
}
