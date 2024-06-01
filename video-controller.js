/** Windows
wmic path win32_VideoController get AdapterRAM
AdapterRAM
4293918720


wmic path win32_VideoController get driverVersion
DriverVersion
31.0.15.4633


wmic path win32_VideoController get name
Name
NVIDIA GeForce RTX 4090 Ti

// Linux apt install mesa-utils
glxinfo | grep -E -i 'device|memory|video'
    GLX_SGI_swap_control, GLX_SGI_video_sync
    Device: D3D12 (NVIDIA GeForce RTX 4090 Ti) (0xffffffff)
    Video memory: 32425MB
    Unified memory: no
    GL_EXT_framebuffer_object, GL_EXT_framebuffer_sRGB, GL_EXT_memory_object,
    GL_EXT_memory_object_fd, GL_EXT_packed_depth_stencil, GL_EXT_packed_float,
    GL_EXT_gpu_program_parameters, GL_EXT_gpu_shader4, GL_EXT_memory_object,
    GL_EXT_memory_object_fd, GL_EXT_multi_draw_arrays,
    GL_EXT_map_buffer_range, GL_EXT_memory_object, GL_EXT_memory_object_fd,
*/
