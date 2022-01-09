import styles from "../styles/MakeEvent.module.css";
import React, {useState} from "react";
import cs from "classNames";

export default function SmallToDoList(props) {
    const [oneToDoItem,setOneToDoItem] = useState("");
    const [allItems,setAllItems] = useState(props.itemSelected.tasks);

    const handleAdd = () => {
        if (oneToDoItem){
            setAllItems([
                {
                    id: Date.now().toString(),
                    name: oneToDoItem,
                    done: false,
                    deleted: false,
                },
                ...allItems,
            ]);
            setOneToDoItem("");
        }
        console.log(allItems);
    }

    const handleDelete = (id) => {
        const _items = allItems.map((item) => {
            if (item.id === id){
                return {
                    ...item,
                    deleted: true,
                }
            }
            return item;
        });

        setAllItems(_items);
    }

    const handleToggle = (id) => {
        const _items = allItems.map((item) => {
            if (item.id === id){
                return {
                    ...item,
                    done: !item.done,
                }
            }
            return item;
        });

        setAllItems(_items);
    }

    return (
        <div className={styles.toDoList}>
            <div className={styles.toDoListInner}>
                <div className={styles.toDoHeader}>
                    <h2 className={styles.listTitle}>{props.itemSelected.name}</h2>
                    <p className={styles.taskCount} id="taskCount">{allItems.filter(({done}) => !done).length} remaining</p>
                </div>
                <div className={styles.toDoBody}>
                    <div className={styles.tasks}>
                        <ul>
                            {allItems
                            .filter(({deleted}) => !deleted)
                            .filter(({done}) => !done)
                            .map(({id,name,done}) => (
                                <div className={styles.oneLine} key={id} id={id}>
                                    <li onClick={()=>handleToggle(id)} 
                                    className={cs('item',{'done':done})}>{name}</li>
                                    <button className={styles.createBtn} onClick={()=>handleDelete(id)}>
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            ))}

                            {allItems
                            .filter(({deleted}) => !deleted)
                            .filter(({done}) => done)
                            .map(({id,name,done}) => (
                                <div className={styles.oneLine} key={id} id={id}>
                                    <li onClick={()=>handleToggle(id)} 
                                    className={cs('item',{'done':done})}>{name}</li>
                                    <button className={styles.createBtn} onClick={()=>handleDelete(id)}>
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            ))} 
                        </ul>
                    </div>
                    <div className={styles.inputWrapper} id="addTask">
                        <input 
                            className={styles.inputTag}
                            type="text"
                            value={oneToDoItem}
                            onChange={(e) => setOneToDoItem(e.target.value)}
                        />
                        <button className={styles.createBtn} onClick={handleAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}
