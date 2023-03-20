import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../../components/Posts/styles";

const Post = (props) => {
    const post = props.post;
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                {/* Image */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />

                {/* Bed & Bedrooms */}
                <Text style={styles.bedroom}>{post.bed} Bed {post.bedroom} Bedroom</Text>

                {/* Type & Descriptions */}
                <Text style={styles.description} numberOfLines={2}>
                    {post.type}. {post.description}
                    </Text>

                {/* Old Price and new Price */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>Rs{post.oldPrice} </Text>
                    <Text style={styles.newPrice}>  Rs{post.newPrice} </Text>
                    <Text style={styles.nightText}>/ night</Text>
                </Text>

                {/* Total price */}
                <Text style={styles.totalPrice}>Rs{post.totalPrice} total</Text>
            </View>
        </View>
    )
};

export default Post;