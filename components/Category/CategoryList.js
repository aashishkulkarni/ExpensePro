import { FlatList } from 'react-native';
import CategoryObject from './CategoryObject';

function renderExpenseItem(itemData) {
    return <CategoryObject {...itemData.item} />
}

function CategoryList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default CategoryList;