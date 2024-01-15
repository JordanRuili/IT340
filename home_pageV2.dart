import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:leoblue/pages/profile.dart';
import '../backend_pages/home_controller.dart';
import '../constant/colors.dart';
import '../utils/section_tile.dart';
import 'package:location/location.dart';
import '../backend_pages/home_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String latitude = 'Latitude : ';
  String longitude = 'Longitude : ';
  User? currentUser;
  List<dynamic> subscription = [];

  @override
  void initState() {
    super.initState();
    currentUser = FirebaseAuth.instance.currentUser;
    loadUserData();
  }

  Future<void> loadUserData() async {
    try {
      if (currentUser != null) {
        DocumentSnapshot userDoc = await FirebaseFirestore.instance
            .collection('users')
            .doc(currentUser!.uid)
            .get();

        setState(() {
          subscription = userDoc['subscription'];
        });
      }
    } catch (e) {
      print('Erreur lors du chargement des données utilisateur : $e');
    }
  }

  Widget _buildSection(String sectionName, String imagePath) {
    return Section(
      onChanged: (p0) {},
      sectionName: sectionName,
      iconSection: Image.asset(
        imagePath,
        width: 45,
        height: 45,
      ),
      followed: subscription.contains(sectionName),
    );
  }

  Widget _buildCoordinatesContainer() {
    return Container(
      padding: const EdgeInsets.all(15.0),
      child: Container(
        padding: const EdgeInsets.all(15.0),
        decoration: BoxDecoration(
          color: tdBlack,
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: Colors.blue, width: 4),
        ),
        child: Column(
          children: [
            const Text(
              'Coordonnées ',
              style: TextStyle(color: tdWhite, fontSize: 20),
            ),
            Column(
              children: [
                Text(
                  'Latitude: $latitude',
                  style: const TextStyle(color: tdWhite, fontSize: 15),
                ),
                const SizedBox(height: 10),
                Text(
                  'Longitude: $longitude',
                  style: const TextStyle(color: tdWhite, fontSize: 15),
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    getUserLocation();
                  },
                  child: const Text('Get Location'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: tdBlack,
      appBar: AppBar(
        backgroundColor: tdWhite,
        elevation: 0,
        title:
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          const Icon(
            Icons.menu,
            color: tdBlack,
            size: 30,
          ),
          const Text(
            "Leoblue",
            style: TextStyle(color: tdBlue, fontSize: 36),
          ),
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => ProfilePage(),
                    ),
                  );
                },
                icon: Image.asset('images/personn_logo.png', height: 40, width: 40),
                label: Text(''), // Vous pouvez laisser cela vide si vous ne voulez pas de texte
                style: ElevatedButton.styleFrom(
                  primary: Colors.transparent, // Couleur d'arrière-plan transparente
                  elevation: 0, // Supprime l'ombre
                ),
              ),

        ]),
      ),

      body: ListView(
        children: [
          _buildSection('Annonce', 'images/annonce.png'),
          _buildSection('Kidnapping', 'images/alerte.png'),
          _buildSection('Fireplace', 'images/feu.png'),
          _buildSection('Tsunami', 'images/tsunami.png'),
          _buildSection('Eirballoon', 'images/montgolfiere.png'),
          ElevatedButton(
            onPressed: () {
              _toggleVisitSatellite();
            },
            child: const Text('Show satellite informations'),
          ),
          _buildCoordinatesContainer(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        onTap: (index) {
          if (index == 1) {  // index 1 corresponds to 'View satellites' button
            Navigator.push(context,
              MaterialPageRoute(builder: (context) => HomeView(controller: HomeController())),  // change SatellitesPage() with your page 
            );
          }
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.satellite_alt),
            label: 'View satellites',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }

  void _toggleVisitSatellite() {
    setState(() {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomePage()),
      );
    });
  }

   void getUserLocation() async {
    // Check if location services are enabled
    Location location = Location();
    bool serviceEnabled;
    PermissionStatus permissionGranted;

    serviceEnabled = await location.serviceEnabled();
    if (!serviceEnabled) {
      serviceEnabled = await location.requestService();
      if (!serviceEnabled) {
        print('Location services are disabled');
        return;
      }
    }

    permissionGranted = await location.hasPermission();
    if (permissionGranted == PermissionStatus.denied) {
      permissionGranted = await location.requestPermission();
      if (permissionGranted != PermissionStatus.granted) {
        print('Location permissions denied');
        return;
      }
    }

    // Get the current position
    LocationData currentLocation = await location.getLocation();

    setState(() {
      latitude = currentLocation.latitude.toString();
      longitude = currentLocation.longitude.toString();
    });
  }
}