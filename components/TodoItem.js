import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({item, presshandler}) => {
    return (
        <TouchableOpacity onPress={()=>presshandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}
 
export default TodoItem;

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:20,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})