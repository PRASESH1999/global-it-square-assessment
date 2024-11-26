import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { CreateProductDTO } from '../dto/createProductDto';
import Product from '../models/product';

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json({
      data: {
        products,
      },
    });
  } catch (error) {
    // Return a standardized error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.',
      details: errorMessage,
    });
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const product = await Product.findById(
      new mongoose.Types.ObjectId(req.params.id),
    );
    if (!product) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json({
      status: 'success',
      message: 'Product retrieved successfully.',
      data: {
        product,
      },
    });
  } catch (error) {
    // Return a standardized error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.',
      details: errorMessage,
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    });
    const productData = plainToClass(CreateProductDTO, newProduct);
    const errors = await validate(productData);
    if (errors.length > 0) {
      // Format validation errors for response
      const validationErrors = errors.map((err) => ({
        field: err.property,
        errors: Object.values(err.constraints || {}),
      }));

      res.status(400).json({
        status: 'fail',
        message: 'Validation error.',
        errors: validationErrors,
      });
    }

    const product = await newProduct.save();
    res.status(201).json({
      status: 'success',
      message: 'Product created successfully.',
      data: {
        product,
      },
    });
  } catch (error) {
    // Return a standardized error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.',
      details: errorMessage,
    });
  }
};
