import chainlit as cl
from chainlit.input_widget import Select, Slider, TextInput

@cl.on_chat_start
async def start():
    # Set custom elements
    await cl.Message(
        content="Welcome to DeepStudy! 🎓",
        actions=[
            cl.Action(name="start_tutorial", value="tutorial", label="Start Tutorial"),
            cl.Action(name="view_resources", value="resources", label="View Resources")
        ]
    ).send()

@cl.on_message
async def main(message: str):
    # Create message elements
    elements = []
    
    # Add a progress bar for longer responses
    msg = cl.Message(content="", disable_feedback=False)
    
    # Simulate processing
    await msg.start()
    
    # Create the response with elements
    response = f"{message}"
    await msg.update(content=response, elements=elements)

@cl.action_callback("start_tutorial")
async def on_tutorial(action):
    await cl.Message(
        content="Let's start with the basics! What would you like to learn?",
        actions=[
            cl.Action(name="topic_math", value="math", label="Mathematics"),
            cl.Action(name="topic_science", value="science", label="Science"),
            cl.Action(name="topic_language", value="language", label="Language")
        ]
    ).send()

@cl.action_callback("view_resources")
async def on_resources(action):
    await cl.Message(content="Here are some helpful resources:").send()
    
    # Display resources as a table
    await cl.Table(
        data=[
            ["Resource", "Type", "Level"],
            ["Interactive Math", "Practice", "Beginner"],
            ["Science Lab", "Simulation", "Intermediate"],
            ["Language Hub", "Exercises", "Advanced"]
        ],
        show_index=False
    ).send() 