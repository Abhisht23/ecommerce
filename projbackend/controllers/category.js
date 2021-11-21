// const Category = require("../models/category");
// //const { off } = require("../models/user");

// exports.getCategoryById = (req, res, next, id) => {
//         Category.execfindById(id).exec((err, cate) => {
//         if(err){
//             return res.status(400).json({
//                 error: "Category not found in DB"
//             });
//         };
//         req.Category = cate;
//         next();
//     })
// };

// //create
// exports.createCategory = (req, res) => {
//     const category = new Category(req.body);
//     //Category.isValidObjectId((err, category) => {
//     category.save((err, category) => {    
//         if(err) {
//             return res.status(400).json({
//                 error: "NOT able to save category in DB"
//             });
//         };
//         res.json({ category });
//     })
// };

// exports.getCategory = (req, res) => {
//     return res.json(req.category);
// }

// //All category
// exports.getAllCategory = (req, res) => {
//     Category.find().exec((err, categories) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "NO categories found"
//             });
//         }
//         res,json(categories);
//     });
// };

// //Update (Put req)
// exports.updateCategory = (req, res) => {
//     const category = req.category;
//     category.name = req.bpdy.name;

//     category.save((err, updateCategory) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "Failed to updae category"
//             });
//         };
//         res.json(updateCategory);
//     })
// };

// //Delete(remove)
// exports.removeCategory = (req, res) => {
//     const category = req.category;

//     category.remove((err, category) => {
//         if(err) {
//             return res.status(400).json({
//                 error: "Failed to delete this category"
//             });
//         }
//         res.json({
//             message: "Successfull delected"
//         });
//     });
// };

const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB"
      });
    }
    req.category = cate;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save category in DB"
      });
    }
    res.json({ category });
  });
};

exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategory = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "NO categories found"
      });
    }
    res.json(categories);
  });
};

exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update category"
      });
    }
    res.json(updatedCategory);
  });
};

exports.removeCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this category"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};
