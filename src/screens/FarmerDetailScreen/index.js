import { View, FlatList } from "react-native";
import farms from "../../../assets/data/farms.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FarmListItems from "../../components/FarmListItems";
import { Header } from "./Header";
import { styles } from './style';

const farm = farms[0];

const FarmerDetailPage = () => {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={Header}
                data={farm.produce}
                renderItem={({ item, index }) => (
                    <FarmListItems key={item.id || index} produce={item} />
                )}
                keyExtractor={(item, index) => item.id || index.toString()}
                style={styles.productsSection}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productsContainer}
            />
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="arrow-left-bold-circle" size={44} color="white" />
            </View>
        </View>
    );
}

export default FarmerDetailPage;