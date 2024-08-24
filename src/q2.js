/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: # Declare an empty array (list) to store patient names
patient_names = []

# Example of adding patient names to the array
patient_names.append("John Doe")
patient_names.append("Jane Smith")

# Print the patient names array
print(patient_names)


function addPatient(patientName){
    // Task 2: # Declare an empty array (list) to store patient names
patient_names = []

# Function to add a patient's name to the array
def add_patient_name(name):
    if isinstance(name, str):  # Check if the name is a string
        patient_names.append(name)
        print(f"Patient '{name}' added successfully.")
    else:
        print("Error: Name must be a string.")

# Example usage
add_patient_name("John Doe")
add_patient_name("Jane Smith")
add_patient_name(123)  # This will trigger an error because the input is not a string

# Print the updated patient names array
print("Patient Names:", patient_names)

}

// Task 3: # Declare an empty array (list) to store patient names
patient_names = []

# Function to add a patient's name to the array
def add_patient_name(name):
    if isinstance(name, str):  # Check if the name is a string
        patient_names.append(name)
        print(f"Patient '{name}' added successfully.")
    else:
        print("Error: Name must be a string.")

# Function to list all patient names
def listPatient():
    if not patient_names:  # Check if the list is empty
        print("No patients found.")
    else:
        print("List of Patients:")
        for index, name in enumerate(patient_names, start=1):
            print(f"{index}. {name}")

# Example usage
add_patient_name("John Doe")
add_patient_name("Jane Smith")
add_patient_name("Alice Johnson")

# Call the listPatient() function to print all patient names
listPatient()



addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]
