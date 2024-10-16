export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  cost: number;
}

export interface ProjectGroup {
  id: string;
  name: string;
  items: ProjectItem[];
}

export const projectData: ProjectGroup[] = [
  {
    id: "part1",
    name: "Customer Experience",
    items: [
      {
        id: "p1_1",
        name: "Customer Accounts",
        description: "Allow customers to create and manage accounts, including viewing their order history and profile information.",
        cost: 120000
      },
      {
        id: "p1_2",
        name: "Integration with Website",
        description: "Sync the app with your website, ensuring real-time updates of inventory, pricing, and promotions.",
        cost: 0
      },
      {
        id: "p1_3",
        name: "Order Management",
        description: "Enable customers to place, track, and manage orders directly through the website.",
        cost: 200000
      },
      {
        id: "p1_4",
        name: "In-App Notifications",
        description: "Send order confirmations, shipping updates, and promotional offers to customers via push notifications.",
        cost: 110000
      },
      {
        id: "p1_5",
        name: "Customer Support",
        description: "Include live chat or a customer support request form, linking to your customer service team.",
        cost: 70000
      },
      {
        id: "p1_6",
        name: "Loyalty Program",
        description: "Implement a points or rewards system to encourage repeat purchases, viewable and manageable through the app.",
        cost: 200000
      },
      {
        id: "p1_7",
        name: "Feedback and Reviews",
        description: "Enable customers to provide feedback and leave product reviews directly within the app.",
        cost: 100000
      }
    ]
  },
  {
    id: "part2",
    name: "Staff Management",
    items: [
      {
        id: "p2_1",
        name: "Inventory Management",
        description: "Allow staff to view, add, or edit inventory directly from the app. Changes should sync with the website and back-end system.",
        cost: 80000
      },
      {
        id: "p2_2",
        name: "Order Processing",
        description: "Notify staff when a new order is placed, with details for preparing and shipping orders.",
        cost: 50000
      },
      {
        id: "p2_3",
        name: "Staff Roles and Permissions",
        description: "Differentiate roles with varying access levels (e.g., admin, sales, inventory management).",
        cost: 250000
      },
      {
        id: "p2_4",
        name: "Task Management",
        description: "Enable assigning and tracking of staff tasks related to order fulfillment, inventory restocking, customer service, etc.",
        cost: 250000
      },
      {
        id: "p2_5",
        name: "Internal Communication",
        description: "Provide an internal messaging system for staff communication, whether for customer orders or other business operations.",
        cost: 200000
      },
      {
        id: "p2_6",
        name: "Analytics and Reporting",
        description: "Allow staff (especially managers) to access sales, order, and inventory reports directly from the app.",
        cost: 0
      }
    ]
  },
  {
    id: "part3",
    name: "Integrations",
    items: [
      {
        id: "p3_1",
        name: "Payment Gateway Integration",
        description: "Ensure seamless integration with payment providers for customer purchases.",
        cost: 100000
      },
      {
        id: "p3_2",
        name: "Shipping/Logistics Integration",
        description: "Connect with shipping providers to update tracking information and provide shipping status to customers.",
        cost: 350000
      },
      {
        id: "p3_3",
        name: "CRM Integration",
        description: "Sync customer data with your CRM for improved customer relationship management.",
        cost: 200000
      },
      {
        id: "p3_4",
        name: "Prescription Handling",
        description: "Orders with prescriptions should be redirected to WhatsApp.",
        cost: 40000
      }
    ]
  },
  {
    id: "part4",
    name: "Core Features",
    items: [
      {
        id: "p4_1",
        name: "User-Friendly Interface",
        description: "Ensure the design is intuitive, sleek, and easy to navigate for both customers and staff.",
        cost: 400000
      },
      {
        id: "p4_2",
        name: "Data Security",
        description: "Implement strong data encryption and privacy protocols to protect customer and business data.",
        cost: 150000
      },
      {
        id: "p4_3",
        name: "Real-Time Synchronization",
        description: "Ensure that all data (inventory, orders, customer profiles) sync in real time between the app and website.",
        cost: 400000
      },
      {
        id: "p4_4",
        name: "App Performance Optimization",
        description: "The app should load quickly and efficiently, even with large amounts of data or during high traffic periods.",
        cost: 100000
      }
    ]
  },
  {
    id: "part5",
    name: "Advanced Analytics",
    items: [
      {
        id: "p5_1",
        name: "Sales Analytics",
        description: "Provide detailed insights into daily, weekly, and monthly sales, including total revenue, best-selling products, and sales trends.",
        cost: 120000
      },
      {
        id: "p5_2",
        name: "Customer Behavior Analytics",
        description: "Track customer interactions within the app, such as frequently viewed products, time spent on product pages, and abandoned carts.",
        cost: 150000
      },
      {
        id: "p5_3",
        name: "Inventory Analytics",
        description: "Generate reports on stock levels, restocking trends, and top-performing products to optimize inventory management.",
        cost: 120000
      },
      {
        id: "p5_4",
        name: "Order Analytics",
        description: "Provide metrics on order fulfillment times, number of orders processed, and average order value.",
        cost: 120000
      },
      {
        id: "p5_5",
        name: "Customer Segmentation",
        description: "Categorize customers based on purchase behavior, frequency, and value, allowing for targeted marketing campaigns.",
        cost: 150000
      },
      {
        id: "p5_6",
        name: "Staff Performance Analytics",
        description: "Track staff performance metrics, such as order processing time, customer interaction stats, and task completion rates.",
        cost: 150000
      },
      {
        id: "p5_7",
        name: "Invoicing System",
        description: "Automatically generate invoices and receipts for customer orders, with the ability to send them directly via email or WhatsApp.",
        cost: 100000
      },
      {
        id: "p5_8",
        name: "Export Reports",
        description: "Export reports or analytics to email or WhatsApp.",
        cost: 50000
      },
      {
        id: "p5_9",
        name: "Expense Tracking",
        description: "Enable staff to log business expenses (e.g., shipping costs, purchase orders) directly in the app for accurate financial tracking.",
        cost: 100000
      },
      {
        id: "p5_10",
        name: "Payment Reconciliation",
        description: "Match mode of incoming payments from customers with the corresponding sales orders (like cash, mobile money, POS, etc).",
        cost: 0
      },
      {
        id: "p5_11",
        name: "Profit and Loss Reports",
        description: "Provide a breakdown of revenue, cost of goods sold (COGS), and other expenses to monitor profit margins.",
        cost: 150000
      }
    ]
  },
  {
    id: "part6",
    name: "Inventory Management",
    items: [
      {
        id: "p6_1",
        name: "Inventory Level Alerts",
        description: "Set up automated alerts for low stock levels, prompting the creation of purchase orders when inventory reaches a predefined threshold.",
        cost: 50000
      },
      {
        id: "p6_2",
        name: "Supplier Information Storage",
        description: "Store supplier details, including name, contact information, and preferred payment terms, for easy access during the procurement process.",
        cost: 100000
      },
      {
        id: "p6_3",
        name: "Detailed Purchase Order Tracking",
        description: "Track individual items on purchase orders, including item name, SKU, quantity, color, size, and other customizable properties.",
        cost: 0
      },
      {
        id: "p6_4",
        name: "Order Cost Breakdown",
        description: "Include details such as unit cost, total order cost, shipping cost, and any applicable taxes or duties.",
        cost: 0
      },
      {
        id: "p6_5",
        name: "Shipment Tracking",
        description: "Track shipping details such as expected delivery date, shipping provider, tracking number, and shipping costs.",
        cost: 100000
      },
      {
        id: "p6_6",
        name: "Receiving Confirmation and Cross-Checking",
        description: "Enable staff to confirm receipt of goods, and automatically compare received quantities against ordered quantities to ensure accuracy.",
        cost: 100000
      },
      {
        id: "p6_7",
        name: "Quality Control Integration",
        description: "Allow staff to mark items as 'approved' or 'rejected' based on quality control checks before updating the inventory.",
        cost: 100000
      },
      {
        id: "p6_8",
        name: "Automatic Inventory Updates",
        description: "Once items are received and approved through the quality control process, automatically update inventory levels to reflect the new stock, eliminating the need for manual input.",
        cost: 100000
      },
      {
        id: "p6_9",
        name: "Partial Delivery Management",
        description: "Track partial deliveries and update the inventory for only the items received and approved, while keeping the remaining items open in the purchase order.",
        cost: 120000
      },
      {
        id: "p6_10",
        name: "Damaged or Rejected Goods",
        description: "Track and manage rejected or damaged items.",
        cost: 120000
      },
      {
        id: "p6_11",
        name: "Purchase Order History",
        description: "Maintain a full history of past purchase orders, including quantities, costs, supplier details, and order status for easy reference and reordering.",
        cost: 100000
      },
      {
        id: "p6_12",
        name: "Automated Inventory Reconciliation",
        description: "Automatically reconcile inventory data with purchase orders to ensure all incoming goods are accurately accounted for in your inventory management system.",
        cost: 100000
      },
      {
        id: "p6_13",
        name: "Alerts for Stock Discrepancies",
        description: "Set up alerts for any discrepancies between ordered and received quantities, helping staff investigate potential issues quickly.",
        cost: 100000
      }
    ]
  },
  {
    id: "part7",
    name: "Pricing Management",
    items: [
      {
        id: "p7_1",
        name: "Margin & Markup Settings",
        description: "Set desired profit margins or markup percentages to calculate the final selling price of each product.",
        cost: 0
      },
      {
        id: "p7_2",
        name: "Discounts and Promotions",
        description: "Set and manage promotional prices, temporary discounts, or clearance pricing for specific products or time periods.",
        cost: 200000
      },
      {
        id: "p7_3",
        name: "Cost & Profit Margin Analysis",
        description: "Analyze cost vs. selling price and show potential profit margins before finalizing the selling price and orders too.",
        cost: 100000
      },
      {
        id: "p7_4",
        name: "Batch Price Updates",
        description: "Update prices in bulk for multiple products simultaneously, saving time when updating seasonal or promotional pricing.",
        cost: 0
      },
      {
        id: "p7_5",
        name: "Price Override Permissions",
        description: "Allow authorized staff to manually override prices for special cases, with tracking of any changes made.",
        cost: 0
      }
    ]
  }
];