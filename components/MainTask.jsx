import React,{ useState } from "react";
import styles from "../styles/MakeEvent.module.css";
import cs from "classNames";
import SmallToDoList from "../components/SmallToDoList";

export default function MainTask() {
    const [todoItem,setTodoItem] = useState("");
    const [items,setItems] = useState([]);


    const handleAdd = () => {
        if (todoItem){
            setItems([
                {
                    id: Date.now().toString(),
                    name: todoItem,
                    done: false,
                    deleted: false,
                    selected: false,
                },
                ...items,
            ]);
            setTodoItem("");
        } 
    };

    const handleToggle = (id) => {
        const _items = items.map((item) => {
            if (item.id === id){
                return {
                    ...item,
                    done: !item.done,
                }
            }
            return item;
        });

        setItems(_items);
    }

    const handleDelete = (id) => {
        const _items = items.map((item) => {
            if (item.id === id){
                return {
                    ...item,
                    deleted: true,
                }
            }
            return item;
        });

        setItems(_items);
    }

    return (
        <div className={styles.wholeWrapper}>
            <p className={styles.taskCount} id="taskCount">{items.filter(({done}) => !done).filter(({deleted}) => !deleted).length} remaining</p>
            <div className={styles.allTasks} id="allTasks">
                <ul>
                    {items
                    .filter(({ deleted }) => !deleted)
                    .filter(({ done }) => !done)
                    .map(({id,name,done}) => (
                        <div className={styles.oneLine} key={id} id={id}>
                            <li onClick={()=>handleToggle(id)} 
                            className={cs('item',{'done':done})}>{name}</li>
                            <button className={styles.createBtn} onClick={()=>handleDelete(id)}>
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    ))}

                    {items
                    .filter(({ deleted }) => !deleted)
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
                <div className={styles.inputWrapper} id="data_new_list_form">
                    <input 
                        className={styles.inputTag}
                        type="text"
                        value={todoItem}
                        onChange={(e) => setTodoItem(e.target.value)}
                    />
                    <button className={styles.createBtn} aria-label="create new list" onClick={handleAdd}>+</button>
                </div>
            </div>
            {/* {itemSelected != null ? <SmallToDoList itemSelected={itemSelected}/> : null} */}
        </div>
    )
}
