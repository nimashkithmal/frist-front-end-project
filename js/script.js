// JavaScript for product image display functionality

function showProductImage() {
    const productImageSection = document.getElementById("productImageSection");
    // TODO 2: Capture the product name from the dropdown with id "productImage" to update the productImage src.
    const productImage = document.getElementById("productImage");
    
    // TODO 3: Capture the productCategory selected from dropdown.
    const productCategory = document.getElementById("productCategory").value;
    
    // TODO 4: Make use of if else-if to show the data on screen and set the src to display the image.
    if (productCategory === "phone") {
        productImage.src = "/images/phone.png";
        productImage.alt = "Phone Product Image";
    } else if (productCategory === "laptop") {
        productImage.src = "/images/laptop.png";
        productImage.alt = "Laptop Product Image";
    } else if (productCategory === "camera") {
        productImage.src = "/images/camera.png";
        productImage.alt = "Camera Product Image";
    } else if (productCategory === "headphones") {
        productImage.src = "/images/headphones.png";
        productImage.alt = "Headphones Product Image";
    } else if (productCategory === "watch") {
        productImage.src = "/images/watch.png";
        productImage.alt = "Smart Watch Product Image";
    } else {
        // If no category is selected or invalid selection
        if (productImageSection) {
            productImageSection.style.display = "none";
        }
        return;
    }
    
    // Show the product image section
    if (productImageSection) {
        productImageSection.style.display = "block";
    }
}

// Additional utility functions for form validation
function validateForm() {
    const productCategory = document.getElementById("productCategory").value;
    const errorDiv = document.getElementById("productCategoryError");
    
    if (productCategory === "") {
        errorDiv.textContent = "Please select a product category";
        errorDiv.style.color = "red";
        return false;
    } else {
        errorDiv.textContent = "";
        return true;
    }
}

// Comprehensive product form validation
function validateProductForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // TODO 1: Get all field values using getElementById()
    const productName = document.getElementById('productName').value.trim();
    const productCategory = document.getElementById('productCategory').value.trim();
    const productId = document.getElementById('productId').value.trim();
    const purchaseDate = document.getElementById('purchaseDate').value.trim();
    const warrantyPeriod = document.getElementById('warrantyPeriod').value.trim();
    const price = document.getElementById('price').value.trim();
    const vendorName = document.getElementById('vendorName').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    
    let isValid = true;
    let errorMessages = [];
    
    // Reset all field borders to normal
    const allFields = ['productName', 'productCategory', 'productId', 'purchaseDate', 'warrantyPeriod', 'price', 'vendorName', 'customerEmail', 'customerPhone'];
    allFields.forEach(fieldId => {
        document.getElementById(fieldId).style.borderColor = '#ddd';
    });
    
    // TODO 2: Validate productCategory
    if (!productCategory) {
        isValid = false;
        errorMessages.push('Please select a product category');
        document.getElementById('productCategory').style.borderColor = 'red';
    }
    
    // TODO 3: Validate productID
    if (!productId) {
        isValid = false;
        errorMessages.push('Product ID is required');
        document.getElementById('productId').style.borderColor = 'red';
    }
    
    // TODO 4: Validate purchaseDate
    if (!purchaseDate) {
        isValid = false;
        errorMessages.push('Purchase date is required');
        document.getElementById('purchaseDate').style.borderColor = 'red';
    }
    
    // TODO 5: Validate warranty between 1-5 years
    if (!warrantyPeriod) {
        isValid = false;
        errorMessages.push('Warranty period is required');
        document.getElementById('warrantyPeriod').style.borderColor = 'red';
    } else if (isNaN(warrantyPeriod) || parseInt(warrantyPeriod) < 1 || parseInt(warrantyPeriod) > 5) {
        isValid = false;
        errorMessages.push('Warranty must be between 1 and 5 years');
        document.getElementById('warrantyPeriod').style.borderColor = 'red';
    }
    
    // TODO 6: Validate price (positive number)
    if (!price) {
        isValid = false;
        errorMessages.push('Price is required');
        document.getElementById('price').style.borderColor = 'red';
    } else if (isNaN(price) || parseFloat(price) <= 0) {
        isValid = false;
        errorMessages.push('Price must be a positive number');
        document.getElementById('price').style.borderColor = 'red';
    }
    
    // TODO 7: Validate vendor
    if (!vendorName) {
        isValid = false;
        errorMessages.push('Vendor name is required');
        document.getElementById('vendorName').style.borderColor = 'red';
    }
    
    // TODO 8: Validate email (check for @ symbol)
    if (!customerEmail) {
        isValid = false;
        errorMessages.push('Email is required');
        document.getElementById('customerEmail').style.borderColor = 'red';
    } else if (!customerEmail.includes('@')) {
        isValid = false;
        errorMessages.push('Please enter a valid email');
        document.getElementById('customerEmail').style.borderColor = 'red';
    }
    
    // TODO 9: Validate phone number (10 digits)
    if (!customerPhone) {
        isValid = false;
        errorMessages.push('Phone name is required and should be of 10 digits');
        document.getElementById('customerPhone').style.borderColor = 'red';
    } else if (!/^\d{10}$/.test(customerPhone)) {
        isValid = false;
        errorMessages.push('Phone name is required and should be of 10 digits');
        document.getElementById('customerPhone').style.borderColor = 'red';
    }
    
    // Validate product name (basic required field)
    if (!productName) {
        isValid = false;
        errorMessages.push('Product name is required');
        document.getElementById('productName').style.borderColor = 'red';
    }
    
    if (isValid) {
        // Show success message
        showSuccessMessage();
        // Hide the form
        document.getElementById('productForm').style.display = 'none';
    } else {
        // Show error messages
        alert('Please fix the following errors:\n' + errorMessages.join('\n'));
    }
    
    return false; // Always return false to prevent form submission
}

// Helper function to get field labels
function getFieldLabel(fieldId) {
    const labels = {
        'productName': 'Product Name',
        'productCategory': 'Product Category',
        'productId': 'Product ID',
        'purchaseDate': 'Purchase Date',
        'warrantyPeriod': 'Warranty Period',
        'price': 'Price',
        'vendorName': 'Vendor Name',
        'customerEmail': 'Customer Email',
        'customerPhone': 'Customer Phone Number'
    };
    return labels[fieldId] || fieldId;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
    }
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!validateForm()) {
                e.preventDefault();
            }
        });
    }
});
