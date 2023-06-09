import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { ACTION } from "../const";
import { CartContext } from "../context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Posts = ({ posts, keyword }) => {

  // eslint-disable-next-line
  const { cartReducer: carts, cartDispatch: dispatch } = useContext(CartContext);
  return (
    <section style={{ backgroundColor: "#eee" ,marginBottom:30}} >
    <div className="container py-3">
      <div className="row ">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post col col-md-12 col-lg-3 mb-4 mb-lg-0">
              <div className="p-3 mb-5 bg-white rounded">
                <div className="product product-body">
                  <div className="product-image mb-2">
                    <img style={{width:220}} src={post.picture || "https://via.placeholder.com/150"} alt="..." />
                  </div>
                  <p className="product-name fw-bold">
                    <Link to={`/post/${post.id}`} className="text-decoration-none text-secondary">{post.name}</Link>
                  </p>
                  <p className="text-dark fw-bold">{post.price}</p>
                  <p >{post.description}</p>
                  <Button
                        variant="info"
                        onClick={() => {
                          dispatch({
                            type: ACTION.ADD_ITEM,
                            payload: {
                              item: { ...post, quantity: 1 },
                            },
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>



  </section>
  );
};
export default Posts;
