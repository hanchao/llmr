#ifndef LLMR_COMMON_NSLOG_LOG
#define LLMR_COMMON_NSLOG_LOG

#include <llmr/util/image.hpp>

namespace llmr {

class NSImageBackend : public util::Image {
public:
    NSImageBackend(const std::string &img, bool flip = false);
};


}

#endif
