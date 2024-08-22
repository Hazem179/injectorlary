from django.core.files import File
from .models import Product
import os
import django
import json
products = [
    {
        "image": "1.jpeg",
        "name": "Swivel two and three ways Tee connection PRV (pressure relief valve)",
        "description": "A versatile swivel connection designed for fluid handling, available in two and three-way configurations. Includes a Tee connection for branching and a Pressure Relief Valve (PRV) to ensure safe operation by releasing excess pressure."
    },
    {
        "image": "2.jpeg",
        "name": "SPM fluid end 15k",
        "description": "High-pressure fluid end for SPM pumps, rated at 15,000 psi. Essential for managing fluid flow in high-pressure applications."
    },
    {
        "image": "3.jpeg",
        "name": "Pipe joint and swivel",
        "description": "A durable pipe joint combined with a swivel mechanism to allow rotation and flexibility in pipe connections, enhancing durability and ease of movement."
    },
    {
        "image": "4.jpeg",
        "name": "Iron basket",
        "description": "A heavy-duty iron basket used for filtering and separating debris from fluids in industrial applications."
    },
    {
        "image": "5.jpeg",
        "name": "PRV",
        "description": "A Pressure Relief Valve (PRV) designed to control and limit the pressure within a system, ensuring safety by releasing excess pressure."
    },
    {
        "image": "6.jpeg",
        "name": "Special threaded Connection JIC and NPT",
        "description": "Specialized threaded connections for joining hydraulic and pneumatic components. Includes JIC (Joint Industrial Council) and NPT (National Pipe Tapered) threads."
    },
    {
        "image": "7.jpeg",
        "name": "Elastomer Bads",
        "description": "Elastomeric components designed for sealing and cushioning in various industrial applications, providing flexibility and durability."
    },
    {
        "image": "8.jpeg",
        "name": "Swivel kits",
        "description": "Complete kits for installing swivel joints, including all necessary components for a secure and reliable connection."
    },
    {
        "image": "9.jpeg",
        "name": "Front seal pipe ram",
        "description": "A pipe ram equipped with a front seal for controlling and sealing pipe sections during operations, crucial for maintaining system integrity."
    },
    {
        "image": "10.jpeg",
        "name": "Pressure sensor",
        "description": "A device used to measure and monitor pressure levels within a system, providing accurate readings for operational control and safety."
    },
    {
        "image": "11.jpeg",
        "name": "Adjustable choke valve",
        "description": "An adjustable valve used to control fluid flow and pressure by varying the choke size, allowing for precise regulation of flow rates."
    },
    {
        "image": "12.jpeg",
        "name": "HT 400 valve seat puller",
        "description": "A tool designed for removing valve seats from high-temperature valves, essential for maintenance and repair tasks."
    },
    {
        "image": "13.jpeg",
        "name": "Data acquisition system transmitter cable",
        "description": "Cables used to transmit data from sensors to a data acquisition system, ensuring accurate and reliable data collection for analysis."
    },
    {
        "image": "14.jpeg",
        "name": "Chemical transfer pump",
        "description": "A pump designed for transferring chemicals safely and efficiently, featuring corrosion-resistant materials and precise flow control."
    },
    {
        "image": "15.jpeg",
        "name": "Liquid N2 Vaporizer",
        "description": "A vaporizer used to convert liquid nitrogen (N2) into a gaseous state, essential for applications requiring nitrogen gas."
    },
    {
        "image": "16.jpeg",
        "name": "1502\" Hammer union plug valve 2\" STD 15k psi",
        "description": "A heavy-duty plug valve with a 1502 Hammer Union connection, designed for high-pressure applications up to 15,000 psi. Ideal for robust and reliable fluid control."
    },
    {
        "image": "17.jpeg",
        "name": "PRV 15k add",
        "description": "A high-pressure Pressure Relief Valve (PRV) rated at 15,000 psi, used for safeguarding systems by releasing excess pressure."
    },
    {
        "image": "18.jpeg",
        "name": "Flow iron Pup joint",
        "description": "Flow iron pup joints available in 2 and 4 feet lengths, with a pressure rating of 15,000 psi. Used to extend the length of piping systems."
    },
    {
        "image": "19.jpeg",
        "name": "Eling tachometer RPM gauge",
        "description": "An RPM gauge used to measure the rotational speed of machinery, providing accurate readings for performance monitoring."
    },
    {
        "image": "20.jpeg",
        "name": "SPM fluid end Pressure rating 10k psi",
        "description": "A fluid end component for SPM pumps, rated at 10,000 psi. Designed for managing fluid flow under high-pressure conditions."
    },
    {
        "image": "21.jpeg",
        "name": "Treating Iron basket",
        "description": "A basket designed for treating iron, used in filtering and managing debris in industrial fluid handling systems."
    },
    {
        "image": "22.jpeg",
        "name": "1502 PRV, plug valve 2*1 and tee connection",
        "description": "1502 Pressure Relief Valve (PRV) combined with a plug valve and Tee connection, used for high-pressure applications and fluid control."
    },
    {
        "image": "23.jpeg",
        "name": "Hydraulic Hose Fitting UNF Adapter",
        "description": "An adapter for hydraulic hose fittings with UNF (Unified National Fine) threads, allowing for secure and reliable connections in hydraulic systems."
    },
    {
        "image": "24.jpeg",
        "name": "Plug Disc",
        "description": "A disc used for plugging and sealing openings in pipes and other components, essential for maintaining system integrity during maintenance."
    },
    {
        "image": "25.jpeg",
        "name": "Back up ring O-ring seal T-seal (Parker ring)",
        "description": "Sealing components including backup rings, O-rings, and T-seals (Parker rings) used for ensuring leak-proof connections in hydraulic and pneumatic systems."
    },
    {
        "image": "26.jpeg",
        "name": "Pipe ram front seal",
        "description": "A front seal for pipe rams, designed to provide a secure seal during operation and maintain system pressure."
    },
    {
        "image": "27.jpeg",
        "name": "Spring retainer (Injector chain gripper blocks)",
        "description": "Spring retainers and injector chain gripper blocks used for securing and retaining components in various machinery."
    },
    {
        "image": "28.jpeg",
        "name": "SPM frac pump packing",
        "description": "Packing materials for SPM frac pumps, designed to handle high pressures and provide reliable sealing during operation."
    },
    {
        "image": "29.jpeg",
        "name": "Elastomer (Kit)",
        "description": "A kit containing elastomeric components used for sealing and cushioning in industrial applications, providing flexibility and durability."
    },
    {
        "image": "30.jpeg",
        "name": "Ring joint jacket BX-154",
        "description": "A ring joint gasket jacket (BX-154) used for high-pressure sealing applications, ensuring a reliable and leak-proof connection."
    },
    {
        "image": "31.jpeg",
        "name": "Frac choke manifold",
        "description": "A manifold used in fracturing operations to control and regulate fluid flow, featuring choke valves for precise flow management."
    },
    {
        "image": "32.jpeg",
        "name": "Flow line safety restraint system",
        "description": "A safety restraint system for flow lines, designed to prevent accidents and ensure the safe operation of fluid handling systems."
    },
    {
        "image": "33.jpeg",
        "name": "Data acquisition system transmitter cable",
        "description": "Cables used for transmitting data from sensors to a data acquisition system, crucial for accurate data collection and analysis."
    },
    {
        "image": "34.jpeg",
        "name": "Electrical sensor for pressure gauge",
        "description": "An electrical sensor used in pressure gauges to measure and monitor pressure levels, providing accurate readings for system control."
    },
    {
        "image": "35.jpeg",
        "name": "Pressure sensor",
        "description": "A device used to monitor and measure pressure levels within a system, essential for operational control and safety."
    },
    {
        "image": "36.jpeg",
        "name": "Flow analyzer",
        "description": "An instrument used to analyze the flow characteristics of fluids, providing detailed information for optimizing fluid handling processes."
    },
    {
        "image": "37.jpeg",
        "name": "Stripper Haskell pump 10k work pressure",
        "description": "A Haskell pump designed for stripping operations, capable of handling up to 10,000 psi work pressure for efficient fluid handling."
    },
    {
        "image": "38.jpeg",
        "name": "Engine turbo charger",
        "description": "A turbocharger used to increase engine performance by forcing more air into the combustion chamber, enhancing power output and efficiency."
    }
]


images_folder = os.path.join(os.path.dirname(__file__), 'products')

def add_products():
    for product_data in products:
        # Create Product instance
        product = Product(
            name=product_data['name'],
            description=product_data['description']
        )
        # Save Product instance to get an ID
        product.save()

        # Attach image
        image_path = os.path.join(images_folder, product_data['image'])
        with open(image_path, 'rb') as image_file:
            product.image.save(product_data['image'], File(image_file), save=True)
