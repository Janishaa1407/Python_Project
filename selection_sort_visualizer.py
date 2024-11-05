import pygame
import random
import time

# Constants
WIDTH = 800
HEIGHT = 400
BAR_WIDTH = 10
DELAY = 0.05  # Delay between steps

# Function to perform selection sort
def selection_sort(arr, screen):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
            draw_array(arr, min_index, i, screen)
            time.sleep(DELAY)
        arr[i], arr[min_index] = arr[min_index], arr[i]
        draw_array(arr, min_index, i, screen)
        time.sleep(DELAY)

# Function to draw the array as bars
def draw_array(arr, min_index, current_index, screen):
    screen.fill((0, 0, 0))  # Clear the screen
    for i, value in enumerate(arr):
        color = (255, 255, 255)
        if i == min_index:
            color = (255, 0, 0)  # Min index color (red)
        elif i <= current_index:
            color = (0, 255, 0)  # Sorted color (green)
        pygame.draw.rect(screen, color, (i * BAR_WIDTH, HEIGHT - value, BAR_WIDTH, value))
    pygame.display.flip()

# Main function
def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Selection Sort Visualization")
    
    # Create an array of random heights
    array_size = WIDTH // BAR_WIDTH
    arr = [random.randint(10, HEIGHT) for _ in range(array_size)]
    
    # Start sorting
    selection_sort(arr, screen)
    
    # Wait for a while before closing
    time.sleep(2)
    pygame.quit()

if __name__ == "__main__":
    main()
