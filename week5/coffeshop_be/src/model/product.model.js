const db = require("../../helper/connection");
const { v4: uuidv4 } = require('uuid');
const productModel = {
    query: (queryParams, sortType='asc', limit=5)=> {
      if(queryParams.search && queryParams.cat) {
        return `WHERE title LIKE '%${queryParams.search}%' AND category LIKE '%${queryParams.cat}%' ORDER BY title ${sortType} LIMIT ${limit}`
      } else if(queryParams.search || queryParams.cat) {
        return `WHERE title LIKE '%${queryParams.search}%' OR category LIKE '%${queryParams.cat}%' ORDER BY title ${sortType} LIMIT ${limit}`
      }else {
        return `ORDER BY title ${sortType} LIMIT ${limit}`
      }

      // const {search,cat} = queryParams
      // return `WHERE title LIKE '%${search}%' ${search && cat ?'AND':'OR'} category LIKE '%${cat}%' ORDER BY title ${sortType}`

    },
    get: function (queryParams) {
        console.log(queryParams)
        // ${queryParams.search && `WHERE title LIKE '%${queryParams.search}%'`}
        // ${queryParams.search && `WHERE title LIKE '%${queryParams.search}%' OR category LIKE '%${queryParams.search}%'`}
        //uncomment if single
        return new Promise((resolve, reject)=> {
          db.query(
              `SELECT * from products ${this.query(queryParams, queryParams.sortBy, queryParams.limit)}`,
              (err, result) => {
                if (err) {
                  return reject(err.message)
                } else {
                  return resolve(result.rows);
                }
              }
            );
      })
        //uncomment if array
        // return new Promise((resolve, reject)=> {
        //   // SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
        //   // FROM Orders
        //   // INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
        //     db.query(
        //         `SELECT * FROM products`,
        //         // `SELECT products.id, products.title, products.category, products.price, product_images.id_product, product_images.name, product_images.filename FROM products INNER JOIN product_images ON products.id=product_images.id_product`,
        //         (err, result) => {
        //           if (err) {
        //             return reject(err.message)
        //           } else {
        //             for (let index = 0; index < result.rowCount; index++) {
        //               db.query(`SELECT id_image, name, filename FROM product_images WHERE id_product=$1`,[result.rows[index].id])
        //               .then((res)=> {
        //                   return resolve({
        //                     ...result.rows[index],
        //                     images: res.rows
        //                   })
        //               })
        //             }
        //             // let results = result.rows.map((item, index)=> {
        //             //   db.query(`SELECT id_image, name, filename FROM product_images WHERE id_product=$1`,[item.id])
        //             //   .then((res)=> {
        //             //       return{
        //             //         ...item,
        //             //         images: res.rows
        //             //       }
        //             //   })
        //             // })
        //             // resolve(results)
        //             // return resolve(result.rows);
        //           }
        //         }
        //       );
        // })
    },
    getDetail:(id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from products WHERE id='${id}'`,
                (err, result) => {
                  if (err) {
                    return reject(err.message)
                  } else {
                    return resolve(result.rows[0])
                  }
                }
              );
        })
    },
    add:({title, img, price, category,file})=> {
      // console.log(file[0].filename)
        return new Promise((resolve, reject)=> {
            db.query(
                `INSERT INTO products (id, title, img, price, category) VALUES ('${uuidv4()}','${title}','${img.file}','${price}','${category}') RETURNING id`,
                (err, result) => {
                  if (err) {
                    return reject(err.message)
                  } else {
                    // console.log(uuidImage, uuidProduct)
                    //ini berlaku ketika upload multiple (array)
                    // for (let index = 0; index < file.length; index++) {
                    //   db.query(`INSERT INTO product_images (id_image, id_product, name, filename) VALUES($1, $2 ,$3 , $4)`,[uuidv4(), result.rows[0].id, title,file[index].filename])
                    // }
                    //end dihapus dan files: file dihapus boleh
                    return resolve({title, img, price, category, files: file})
                  }
                }
              )
        })

    },
    update:({id, title, img, price, category})=> {
        return new Promise((resolve, reject)=> {
            db.query(`SELECT * FROM products WHERE id='${id}'`,(err, result)=>{
                if(err) {
                    return reject(err.message)
                }else {
                    // const dataUpdate = [result.rows[0].title, result.rows[0].img, result.rows[0].price, result.rows[0].category]
                    db.query(
                        `UPDATE products SET title='${title || result.rows[0].title}', img='${img || result.rows[0].img}',price='${price || result.rows[0].price}', category='${category || result.rows[0].category}' WHERE id='${id}'`,
                        (err, result) => {
                          if (err) {
                            return reject(err.message)
                          } else {
                            return resolve({id, title, img, price, category})
                          }
                        }
                      );
                }
            })
        })
    },
    remove:(id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `DELETE from products WHERE id='${id}'`,
                (err, result) => {
                  if (err) {
                    return reject(err.message);
                  } else {
                    return resolve('success delete')
                  }
                }
              );
        })
    }, 
}



module.exports = productModel