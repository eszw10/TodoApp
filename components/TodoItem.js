import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item, presshandler}) => {
    return (
        <TouchableOpacity onPress={()=>presshandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={24} color={'black'}/>
                <Text>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    );
}
 
export default TodoItem;

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        padding:16,
        marginTop:20,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})