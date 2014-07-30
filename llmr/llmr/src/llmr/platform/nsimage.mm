#include <llmr/platform/nsimage.hpp>

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#include <cstdarg>

namespace llmr {

NSImageBackend::NSImageBackend(const std::string &data, bool flip):Image(data, flip)
{
    NSData *nsdata = [NSData dataWithBytes:data.data() length:data.length()];
    UIImage *image = [UIImage imageWithData:nsdata];
    
    CGImageRef imageRef = [image CGImage];
    width = CGImageGetWidth(imageRef);
    height = CGImageGetHeight(imageRef);
    CFDataRef dataRef = CGDataProviderCopyData(CGImageGetDataProvider(imageRef));
    img = (char *)malloc(width * height * 4);
    memcpy(img,CFDataGetBytePtr(dataRef),width * height * 4);
}
    
}
